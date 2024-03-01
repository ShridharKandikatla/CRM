import express from 'express';
import { createCourse, getCourse } from '../Controllers/controller.course.js';

const router = express.Router();

router.post('/', createCourse);
router.get('/', getCourse);

export default router;
