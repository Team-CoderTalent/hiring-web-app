import { config } from "dotenv";
import App from "./app";
import { validateEnv } from './utils';
import { JobsController } from './controllers';

config();
validateEnv();

const port = parseInt( process.env.PORT) || 5000;
const app = new App(
  [
    new JobsController()
  ],
  port,
);

app.listen();

export default app;
