import express from 'express';
const router = express.Router();
import staffRouter from './route.staff.js';

router.use('/staff', staffRouter);

export default router;
