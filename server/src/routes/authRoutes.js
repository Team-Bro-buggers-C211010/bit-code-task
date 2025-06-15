import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
    res.json({ message: 'Login successful' });
});
router.post('/register', (req, res) => {
    res.json({ message: 'Registration successful' });
});
router.get('/logout', (req, res) => {
    res.json({ message: 'Logout successful' });
});

export default router;