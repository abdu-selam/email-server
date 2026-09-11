import type { Request, Response } from "express";
import { isEmail } from "../utils/validation";
import { sendEmailTemplate } from "../utils/templates";
import { sendEmailService } from "../services/email.service";

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

    const { text, html, subject } = sendEmailTemplate(name, email, message);
    const resEmail = await sendEmailService({ to: email, subject, html, text });

    res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log("Error on the sendEmail controller:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
