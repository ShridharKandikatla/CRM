import express from 'express';
const router = express.Router();
import userRouter from './route.user.js';

router.use('/user', userRouter);

export default router;
