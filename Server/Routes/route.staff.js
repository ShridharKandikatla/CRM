import {
  Login,
  Register,
  deleteProfile,
  getProfile,
  putProfile,
} from '../Controllers/controller.staff.js';
import express from 'express';
import rateLimit from 'express-rate-limit';
import authMiddleware from '../Middlewares/authMiddleware.js';
const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests, please try again after 15 minutes',
  handler: (req, res, next, options) =>
    res.status(options.statusCode).send(options.message),
});

router.post('/register', Register);
router.post('/login', limiter, Login);
router.get('/profile', authMiddleware, getProfile);
router.delete('/profile', authMiddleware, deleteProfile);
router.put('/profile', authMiddleware, putProfile);

export default router;
