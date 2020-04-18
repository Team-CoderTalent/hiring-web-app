import * as express from 'express';

export class BaseController {
  public router: express.Router;
  public path: string;
}

export interface Ibase {
  initializeRoutes(): void;
}
