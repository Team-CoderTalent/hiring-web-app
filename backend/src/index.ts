import { config } from "dotenv";
import App from "./app";
import { validateEnv } from './utils';

config();
validateEnv();

const app = new App(
  [
  ],
  5000,
);

app.listen();

export default app;
