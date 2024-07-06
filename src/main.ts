import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes/index'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/api/', routes);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
