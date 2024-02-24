import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.USER_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

