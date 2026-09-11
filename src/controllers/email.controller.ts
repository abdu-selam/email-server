import type { Request, Response } from "express";
import { isEmail } from "../utils/validation";

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

    // send email function
  } catch (error) {
    console.log("Error on the sendEmail controller:", error);
  }
};
