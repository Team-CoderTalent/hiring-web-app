import express from 'express';
import bodyParser from 'body-parser';

class App {
  public app: express.Application;
  public port: number;
  private _controllers: any;

  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
    this._controllers = controllers;

    this.initializeMiddlewares();
    this.initializeControllers();
  }

  public listen() {
    this.app.listen(this.port, err => {
      if (err) return console.error(err);
      return console.log(`Server is listening on ${this.port}`);
    });
  }

  private initializeControllers() {
    this._controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
}

export default App;
