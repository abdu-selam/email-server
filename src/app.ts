import express from "express";
import cors from "cors";
import ENV from "./utils/env";
import emailRoute from "./routes/email.route";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ENV.CLIENTS,
  }),
);

app.use("/email", emailRoute);

export default app;
