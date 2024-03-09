import express from 'express';
const router = express.Router();
import staffRouter from './route.staff.js';
import studentRouter from './route.student.js';
import courseRouter from './route.course.js';
import authMiddleware from '../Middlewares/authMiddleware.js';

router.use('/staff', staffRouter);
router.use('/student', authMiddleware, studentRouter);
router.use('/course', authMiddleware, courseRouter);

export default router;
