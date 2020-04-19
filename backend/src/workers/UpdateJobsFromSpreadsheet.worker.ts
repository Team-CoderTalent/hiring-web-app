import {WorkerInterface, JobInterface, IjobWithAction, SpreadSheetApiInterface} from '../interfaces';
import {jobModel} from '../models/v1';
import moment from "moment";

const {GoogleSpreadsheet, GoogleSpreadsheetWorksheet} = require('google-spreadsheet'); // eslint-disable-line

export default class UpdateJobsFromSpreadsheetWorker implements WorkerInterface {
  private _interval: number;
  private _docId: string;
  private _email: string;
  private _privateKey: string;

  constructor(interval: number, docId: string, email: string, privateKey: string) {
    this._interval = interval;
    this._docId = docId;
    this._privateKey = privateKey;
    this._email = email;
  }

  public async start(): Promise<boolean> {
    setInterval(async () => {
      const startTime = moment();
      console.log('Running update jobs background at', startTime.format("DD/MM/YYYY HH:mm:ss"));

      try {
        const sheet = await this.getSheet();
        const rows = await sheet.getRows();
        const jobs: IjobWithAction = await this.prepareRows(rows);

        await this.createJobs(jobs.create);
        await this.updateJobs(jobs.update);
      } catch (err) {
        console.dir(err)
      }
    }, this._interval);
    return true;
  }

  private async createJobs(jobs: JobInterface[]): Promise<boolean> {
    await jobModel.insertMany(jobs);
    return true;
  }

  private async updateJobs(jobs: JobInterface[]): Promise<boolean> {
    jobs.map(async (job: JobInterface) => {
      await jobModel.updateOne({link: job.link}, {$set: job});
    });
    return true;
  }

  private async prepareRows(rows: []): Promise<IjobWithAction> {
    const date = new Date;
    const jobWithAction: IjobWithAction = {create: [], update: []};

    let i;
    for (i = 0; i < rows.length; i++) {
      const row: SpreadSheetApiInterface = rows[i];

      const job: JobInterface = {
        company: row.Company, role: row.Roles, jobType: row['Job Type'],
        location: row.Locations, lastUpdated: row['Last Updated'], link: row['Apply Link'],
        category: row.Category, createdAt: date, updatedAt: date, active: row.Active
      };

      const existingJob = await jobModel.findOne({link: job.link});
      if (existingJob) {
        jobWithAction.update.push(job);
      } else {
        jobWithAction.create.push(job);
      }
    }

    return jobWithAction;
  }

  private async getSheet(defaultIndex = 0): Promise<typeof GoogleSpreadsheetWorksheet> {
    const doc = new GoogleSpreadsheet(this._docId);
    await doc.useServiceAccountAuth({
      "client_email": this._email,
      "private_key": this._privateKey,
    });
    await doc.loadInfo();
    return doc.sheetsByIndex[defaultIndex];
  }
}
