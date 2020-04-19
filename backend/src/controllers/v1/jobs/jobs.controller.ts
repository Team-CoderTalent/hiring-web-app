import express from 'express';
import { ControllerInterface, JobInterface } from '../../../interfaces';
import { jobModel } from '../../../models/v1';

class JobsController implements ControllerInterface {
  public path = '/api/v1';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path + '/jobs', this.getAllJobs);
  }

  getAllJobs = async (request: express.Request, response: express.Response) => {
    const jobs: JobInterface[] = await jobModel.find();

    return response.send(jobs);
  }
}

export default JobsController;
