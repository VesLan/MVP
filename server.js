import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { SendMail } from './sendEmail.js';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Get!');
});

app.post('/mail', (req, res) => {
  SendMail(req.body);
});

app.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});
