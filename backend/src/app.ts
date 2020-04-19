import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import { ControllerInterface } from "./interfaces";
import { UpdateJobsFromSpreadsheetWorker } from "./workers";

class App {
  public app: express.Application;
  public port: number;
  private _controllers: Array<ControllerInterface>;

  constructor(controllers: Array<ControllerInterface>, port: number) {
    this.app = express();
    this.port = port;
    this._controllers = controllers;

    this.connectToTheDatabase();
    this.initializeMiddleware();
    this.initializeControllers();
    this.setBackgroundJobs();
  }

  /* istanbul ignore next */
  public listen(): void {
    this.app.listen(this.port, () => {
      return console.log(`Server is listening on ${this.port}`);
    });
  }

  private initializeControllers(): void {
    this._controllers.forEach((controller: ControllerInterface) => {
      this.app.use("/", controller.router);
    });
  }

  private initializeMiddleware(): void {
    this.app.use(bodyParser.json());
    this.app.use(helmet());
    this.app.use(cors());
  }

  private setBackgroundJobs(): void {
    mongoose.connection.once("open", async () => {
      const {
        UPDATE_JOBS_INTERVAL,
        GOOGLE_SPREADSHEET_ID,
        GOOGLE_SERVICE_ACCOUNT_EMAIL,
        GOOGLE_PRIVATE_KEY,
      } = process.env;

      /* istanbul ignore next */
      const interval = parseInt(UPDATE_JOBS_INTERVAL) || 600000;
      const updateJobs = new UpdateJobsFromSpreadsheetWorker(
        interval,
        GOOGLE_SPREADSHEET_ID,
        GOOGLE_SERVICE_ACCOUNT_EMAIL,
        GOOGLE_PRIVATE_KEY
      );
      await updateJobs.startWithInterval();
    });
  }

  private connectToTheDatabase(): void {
    /* istanbul ignore next */
    if (mongoose.connection.readyState === 0) {
      const { MONGO_URI } = process.env;
      mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  }
}

export default App;
