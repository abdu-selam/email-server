import express from "express";

const app = express();

app.get("/", (req, res): void => {
  res.send("Hello");
});

export default app;
