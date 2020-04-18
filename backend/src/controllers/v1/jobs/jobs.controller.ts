import express from 'express';
import Job from './job.interface';
import { BaseController, Ibase } from '../../index';

class JobsController extends BaseController implements Ibase {
  public path = '/api/v1';
  public router = express.Router();

  private jobs: Job[] = [
    {
      company: 'Yapily',
      role: "Software Engineer",
      jobType: "Permanent",
      location: "London, UK",
      link: "https://jobs.smartrecruiters.com/oneclick-ui/company/118051607/job/1409470234/publication/743999710689036",
      lastUpdated: "April 8",
      category: "Computer Software",
      updatedAt: new Date,
      createdAt: new Date,
    }
  ];

  constructor() {
    super();
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path + '/jobs', this.getAllJobs);
  }

  getAllJobs = async (request: express.Request, response: express.Response) => {
    const jobs = await Promise.resolve(this.jobs);

    return response.send(jobs);
  }
}

export default JobsController;
