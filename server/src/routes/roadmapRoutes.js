import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all roadmap items' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Specific roadmap item with ID: ${id}` });
});

router.put('/:id/upvote', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Upvoted a roadmap item with ID: ${id}` });
});

export default router;