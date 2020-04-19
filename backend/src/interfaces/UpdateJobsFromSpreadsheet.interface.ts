import {JobInterface} from "./index";

export interface SpreadSheetApiInterface {
  Company: string;
  Roles: string;
  "Job Type": string;
  Locations: string;
  "Last Updated": string;
  "Apply Link": string;
  Category: string;
  Active: string;
}

export interface IjobWithAction {
  create: Array<JobInterface>;
  update: Array<JobInterface>;
}
