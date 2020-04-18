import { config } from "dotenv";
import App from "./app";
import { validateEnv } from './utils';
import { JobsController } from './controllers';

config();
validateEnv();

const app = new App(
  [
    new JobsController()
  ],
  5000,
);

app.listen();

export default app;
