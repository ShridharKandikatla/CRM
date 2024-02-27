import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import mainRouter from './Routes/index.js';
import fs from 'fs';
import path, { dirname } from 'path';

const app = express();
app.use(express.json());
app.use(helmet());

// Logging and monitoring
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, 'access.log'),
//   { flags: 'a' }
// );
// app.use(morgan('combined', { stream: accessLogStream }));

app.use('/api/v1', mainRouter);

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(process.env.PORT || 5050, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
