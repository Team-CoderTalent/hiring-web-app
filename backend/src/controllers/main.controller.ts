import express from 'express';
import { ControllerInterface } from '../interfaces';

class MainController implements ControllerInterface {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.root);
  }

  root(request: express.Request, response: express.Response): express.Response {
    return response.send({uptime: process.uptime()});
  }
}

export default MainController;
