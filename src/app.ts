import express from "express";
import cors from "cors";
import ENV from "./utils/env";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ENV.CLIENTS,
  }),
);

export default app;
