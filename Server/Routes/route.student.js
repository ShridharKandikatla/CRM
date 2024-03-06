import express from 'express';
import {
  createStudent,
  getCounts,
  getStudentByAnyData,
  getStudents,
  updateStudent,
} from '../Controllers/controller.student.js';
const router = express.Router();

router.post('/', createStudent);
router.get('/', getStudents);
router.get('/data', getStudentByAnyData);
router.put('/:id', updateStudent);
router.get('/count',getCounts )

export default router;
