import { config } from "dotenv";

config();

type Env = {
  PORT: string | undefined;
  CLIENTS: Array<string>;
  EMAIL_PASSWORD: string | undefined;
  EMAIL_USER: string | undefined;
  ADMIN_EMAIL: string | undefined;
};

const ENV: Env = {
  PORT: process.env.PORT,
  CLIENTS: JSON.parse(process.env.CLIENTS || "[]"),
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  EMAIL_USER: process.env.EMAIL_USER,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
};

export default ENV;
