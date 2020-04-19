import app from "../../server";
const request = require('supertest');
import mongoose from 'mongoose';
import { MockMongoose } from 'mock-mongoose';
import {UpdateJobsFromSpreadsheetWorker} from "../../workers";
jest.mock('google-spreadsheet');
import {jobModel} from '../../models/v1';

const server = request(app);
let mockMongoose: MockMongoose = new MockMongoose(mongoose);

describe("index/init", () => {
  let updateJobs: any;

  beforeAll(async () => {
    await mockMongoose.prepareStorage();
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const {
      GOOGLE_SPREADSHEET_ID,
      GOOGLE_SERVICE_ACCOUNT_EMAIL,
      GOOGLE_PRIVATE_KEY
    } = process.env;

    /* istanbul ignore next */
    const interval = 10000;
    updateJobs = new UpdateJobsFromSpreadsheetWorker(interval,
      GOOGLE_SPREADSHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY);
  });

  beforeEach(async () => {
    await jobModel.deleteMany({});
  });

  describe("when success",() => {
    it("should returns array", async () => {
      const response = await updateJobs.start();

      expect(response.create.length).toBeTruthy();
    });

    it("should update existing job", async () => {
      await jobModel.insertMany([{
        company: 'Yapily',
        role: "Software Engineer",
        jobType: "Contract",
        location: "London, UK",
        link: "https://jobs.link",
        lastUpdated: "April 8",
        active: 1,
        category: "Computer Software",
        updatedAt: new Date,
        createdAt: new Date,
      }]);
      const response = await updateJobs.start();
      expect(response.update[0].jobType).toEqual("Permanent");
    });
  });
});
