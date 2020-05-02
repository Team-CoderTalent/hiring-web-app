import mongoose from 'mongoose';
import { JobInterface } from '../../../interfaces';

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  jobType: String,
  location: String,
  link: String,
  active: String,
  category: String,
  lastUpdated: String,
  updatedAt: Date,
  createdAt: Date,
});

const jobModel = mongoose.model<JobInterface & mongoose.Document>
('Job', jobSchema);

export default jobModel;
