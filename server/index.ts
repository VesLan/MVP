import { Express, Request, Response } from 'express';
// Use Require Since Import Not Working
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

const app: Express = express();

const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Test');
});

app.listen(port);
