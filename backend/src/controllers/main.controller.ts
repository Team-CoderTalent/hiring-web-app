import express from 'express';
import {BaseController, Ibase} from './index';

class MainController extends BaseController implements Ibase {
  public path = '/';
  public router = express.Router();

  constructor() {
    super();
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
