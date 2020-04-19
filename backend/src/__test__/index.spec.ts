import app from "../server";
const request = require('supertest');
import mongoose from 'mongoose';
import { MockMongoose } from 'mock-mongoose';

const server = request(app);
const apiPath = "/api/v1";
let mockMongoose: MockMongoose = new MockMongoose(mongoose);

describe("index/init", () => {
  beforeAll(async () => {
    await mockMongoose.prepareStorage();
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  it("should initiate the app", () => {
    expect(app).toBeTruthy();
  });

  describe('when root path', () => {
    test("should return success code", async () => {
      await server
        .get("/")
        .expect(200);
    });
  });

  describe('when /api/v1/jobs', () => {
    test("should return success code", async () => {
      await server
        .get(`${apiPath}/jobs`)
        .expect(200);
    });
  });
});
