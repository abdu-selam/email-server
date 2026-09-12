import type { Request, Response } from "express";
import { isEmail } from "../utils/validation";
import { sendEmailService } from "../services/email.service";
import { sendEmailTemplate } from "../utils/templates";

export const sendEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      res.status(400).json({
        error: "Invalid Request",
      });
      return;
    }

    if (!isEmail(email)) {
      res.status(400).json({
        error: "Invalid Request",
      });
      return;
    }

    const {subject, html} = sendEmailTemplate(name, email, message)
    const resEmail = await sendEmailService({ subject, html });

    if (resEmail) {
      res.status(200).json({
        message: "Message sent successfully",
      });
    } else {
      res.status(400).json({
        error: "Invalid Request",
      });
    }
  } catch (error) {
    console.log("Error on the sendEmail controller:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
