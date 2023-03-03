import {
  createTransport,
  getTestMessageUrl,
} from 'nodemailer';
// import Mail from 'nodemailer/lib/mailer';
import * as dotenv from 'dotenv';
dotenv.config();

const SendMail = async () => {
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `"Fred Foo 👻" <${process.env.USER}>`, // Sender Address
    to: `${process.env.USER}`, // List of Receivers
    subject: 'Test ✔', // Subject Line
    text: 'Hello Test?', // Plain Text Body
    html: '<b>Hello world?</b>', // Html Body
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', getTestMessageUrl(info));
};

export default SendMail;
