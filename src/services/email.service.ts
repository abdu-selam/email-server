import ENV from "../utils/env";

import transporter from "../configs/email.config";

export const sendEmailService = async ({
  subject,
  html,
}: {
  subject: string;
  html: string;
}): Promise<any> => {
  const response = await transporter.sendTransacEmail({
    sender: {
      name: ENV.BREVO_SENDER_NAME,
      email: ENV.BREVO_SENDER_EMAIL,
    },

    to: [
      {
        email: ENV.ADMIN_EMAIL || "",
      },
    ],

    subject,

    htmlContent: html,
  });

  return response;
};
