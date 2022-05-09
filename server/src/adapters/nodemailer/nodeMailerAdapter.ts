import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2aad2b6c99734c",
    pass: "782c9bc44a0e63",
  },
});

export class NodeMailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Elton Souza <elton.souza1515@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}

// [
//     `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
//     `<p>Tipo do feeedback: ${type}</p>`,
//     `<p>Comentário: ${comment}</p>`,
//     `</div>`,
//   ].join("\n"),
