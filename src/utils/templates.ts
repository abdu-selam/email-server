type TemplateType = {
  text: string;
  html: string;
  subject: string;
};

export const sendEmailTemplate = (
  name: string,
  email: string,
  message: string,
): TemplateType => {
  const text = `
  From: ${name}, 
  Email: ${email}

  Message: ${message}
  `;

  const html = htmlEmailCreator(name, email, message);

  const subject = "Email Send From Client";

  return {
    text,
    html,
    subject,
  };
};

const htmlEmailCreator = (
  name: string,
  email: string,
  message: string,
): string => {
  return `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Message from ${name}</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 25px 30px;
      font-family: Verdana, Geneva, sans-serif;
    "
  >
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
    >
      <tr>
        <td align="center">
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="600"
            style="
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              width: 100%;
              max-width: 600px;
            "
          >
            <tr>
              <td
                style="
                  background: linear-gradient(
                    135deg,
                    rgb(0, 0, 0),
                    rgb(0, 0, 77)
                  );
                  color: #ffffff;
                  padding: 30px;
                  text-align: center;
                "
              >
                <h1 style="margin: 0">New Message</h1>
                <p style="margin: 5px 0 0; line-height: 1.2; font-size: 15px">
                  You have new message
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding: 30px; color: #333333">
                <h3 style="margin-top: 0; line-height: 1">From: ${name},</h3>
                <h3 style="margin-top: 0; line-height: 1">Email: ${email},</h3>

                <hr />
                <h3>Message</h3>
                <p style="line-height: 1.3">${message}</p>
                <hr />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
