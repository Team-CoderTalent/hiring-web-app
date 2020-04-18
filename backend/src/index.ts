import { config } from "dotenv";
import App from "./app";
import { validateEnv } from './utils';
import { JobsController, MainController } from './controllers';

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
