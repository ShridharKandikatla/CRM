import Login from '../Controllers/controller.login.js';
import express from 'express';
const router = express.Router();

router.post('/login', Login);

export default router;
