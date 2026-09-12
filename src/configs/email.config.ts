import ENV from "../utils/env";
import SibApiV3Sdk from "sib-api-v3-sdk"

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = ENV.SMTP_KEY;

const transporter = new SibApiV3Sdk.TransactionalEmailsApi();

export default transporter;
