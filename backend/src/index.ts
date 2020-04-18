import { config } from "dotenv";
import App from "./app";
import { validateEnv } from './utils';

config();
validateEnv();

const port = parseInt( process.env.PORT) || 5000;
const app = new App(
  [
  ],
  port,
);

app.listen();

