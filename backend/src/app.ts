import express from 'express';
import bodyParser from 'body-parser';
import { Base } from './controllers';

class App {
  public app: express.Application;
  public port: number;
  private _controllers: Array<Base>;

  constructor(controllers: Array<Base>, port: number) {
    this.app = express();
    this.port = port;
    this._controllers = controllers;

    this.initializeMiddlewares();
    this.initializeControllers();
  }

  public listen(): void {
    this.app.listen(this.port, err => {
      if (err) return console.error(err);
      return console.log(`Server is listening on ${this.port}`);
    });
  }

  private initializeControllers(): void {
    this._controllers.forEach((controller: Base) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
  }
}

export default App;
