/* eslint-disable no-undef */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { SendMail } from './sendEmail.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Get!');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.post('/mail', (req, res) => {
  SendMail(req.body);
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running at http://localhost:${process.env.PORT}`,
  );
});
