import Login from '../Controllers/controller.login.js';
import express from 'express';
import rateLimit from 'express-rate-limit';
const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests, please try again after 15 minutes',
  handler: (req, res, next, options) =>
    res.status(options.statusCode).send(options.message),
});

router.post('/login', limiter, Login);

export default router;
