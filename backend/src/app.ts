import express from 'express';
import bodyParser from 'body-parser';
import helmet from "helmet";
import cors from "cors";
import { BaseController } from './controllers';

class App {
  public app: express.Application;
  public port: number;
  private _controllers: Array<BaseController>;

  constructor(controllers: Array<BaseController>, port: number) {
    this.app = express();
    this.port = port;
    this._controllers = controllers;

    this.initializeMiddlewares();
    this.initializeControllers();
  }

  /* istanbul ignore next */
  public listen(): void {
    this.app.listen(this.port, () => {
      return console.log(`Server is listening on ${this.port}`);
    });
  }

  private initializeControllers(): void {
    this._controllers.forEach((controller: BaseController) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(helmet());
    this.app.use(cors());
  }
}

export default App;
