import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const USER_GMAIL = process.env.USER_GMAIL;
const PASS_GMAIL = process.env.PASS_GMAIL;

export const sendMail = async (to: string, subject: string, text: string) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER_GMAIL,
        pass: PASS_GMAIL,
      },
    });

    const mailOptions = {
      from: "Cadastro do Bem <no-repply@cadastrodobem.com.br>",
      to,
      subject,
      text,
    };

    const result = await transport.sendMail(mailOptions);

    return result;
  } catch (error) {
    return error;
  }
};
