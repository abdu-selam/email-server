import { Router } from "express";
import { sendEmail } from "../controllers/email.controller";

const route = Router();

route.post("/", sendEmail);

export default route;
