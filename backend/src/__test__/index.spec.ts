import app from "../index";
const request = require('supertest');
import mongoose from 'mongoose';

const server = request(app);
const apiPath = "/api/v1";


describe("index/init", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI,
      { useNewUrlParser: true, useCreateIndex: true },
      (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
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
