import { config } from "dotenv";

config();

const ENV: Record<string, string | Array<string> | undefined> = {
  PORT: process.env.PORT,
  CLIENTS: JSON.parse(process.env.CLIENTS || "[]"),
};

export default ENV;
