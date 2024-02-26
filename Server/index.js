import 'dotenv/config';
import express from 'express';
import mainRouter from './Routes/index.js';

const app = express();
app.use(express.json());
    
app.use('/api/v1', mainRouter);

app.listen(process.env.PORT || 5050, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
