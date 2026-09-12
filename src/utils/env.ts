import { config } from "dotenv";

config();

type Env = {
  PORT: string | undefined;
  CLIENTS: Array<string>;

  ADMIN_EMAIL: string | undefined;
  BREVO_SENDER_EMAIL: string | undefined;
  BREVO_SENDER_NAME: string | undefined;
  SMTP_KEY: string | undefined;
};

const ENV: Env = {
  PORT: process.env.PORT,
  CLIENTS: JSON.parse(process.env.CLIENTS || "[]"),

  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  BREVO_SENDER_EMAIL: process.env.BREVO_SENDER_EMAIL,
  BREVO_SENDER_NAME: process.env.BREVO_SENDER_NAME,
  SMTP_KEY: process.env.SMTP_KEY,
};

export default ENV;
