import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import mainRouter from './Routes/index.js';
import fs from 'fs';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello");
})
// Logging and monitoring
const accessLogStream = fs.createWriteStream('./Log/access.log', {
  flags: 'a',
});
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/api/v1', mainRouter);

app.all('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(process.env.PORT || 5050, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
