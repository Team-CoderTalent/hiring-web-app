import { config } from "dotenv";
import App from "./app";
import { validateEnv } from './utils';
import { JobsController, MainController } from './controllers/v1';

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

config();
validateEnv();

/* istanbul ignore next */
const port = parseInt(process.env.PORT) || 5000;
const appInstance = new App(
  [
    new JobsController(),
    new MainController(),
  ],
  port,
);

/* istanbul ignore next */
if(require.main === module) {
  appInstance.listen();
}

export default appInstance.app;
