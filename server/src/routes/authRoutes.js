import express from 'express';
import { checkAuth, login, logout, register } from '../controllers/authController.js';
import { verifyToken } from './../middleware/auth.middleware.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);
router.get('/check-auth', verifyToken, checkAuth);

export default router;