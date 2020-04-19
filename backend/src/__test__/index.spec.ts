import app from "../index";
const request = require('supertest');
import mongoose from 'mongoose';
import { MockMongoose } from 'mock-mongoose';

const server = request(app);
const apiPath = "/api/v1";
let mockMongoose: MockMongoose = new MockMongoose(mongoose);

describe("index/init", () => {
  beforeAll(() => {
    mockMongoose.prepareStorage().then(() => {
      mongoose.connect('mongodb://foobar/baz');
      mongoose.connection.on('connected', () => {
        console.log('db connection is now open');
      });
    });
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
