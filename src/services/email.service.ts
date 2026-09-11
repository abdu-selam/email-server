import ENV from "../utils/env";

import transporter from "../configs/email.config";
import type { SMTPSentMessageInfo } from "nodemailer";

export const sendEmailService = async ({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
}): Promise<SMTPSentMessageInfo> => {
  return transporter.sendMail({
    from: `Email Admin, ${ENV.EMAIL_USER}`,
    to,
    subject,
    html,
    text,
  });
};
