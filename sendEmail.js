import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const SendMail = async (info) => {
  const { firstName, lastName, email, message } = info;

  const transporter = createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.VITE_USER,
      pass: process.env.VITE_PASSWORD,
    },
  });

  const emailOpt = {
    from: '50011640@qq.com', // Sender Address
    to: 'wangchanghua13@gmail.com', // List of Receivers
    subject: `${firstName} ${lastName} Has Send An Email to You ✔`, // Subject Line
    // text: `Her/His Email Address is ${email}, Message is ${message} ✔`, // Plain Text Body
    html: `
    <h3><b>Her/His Email Address is ${email}</b></h2>
    <br />
    <h3><b>Here is Message:</b></h3>
    <br />
    <div><b>${message}</b></div>
    `, // Html Body
  };

  transporter.sendMail(emailOpt, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
