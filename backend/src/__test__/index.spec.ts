import app from "../index";
const request = require('supertest');

const server = request(app);
const apiPath = "/api/v1";


describe("index/init", () => {
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
