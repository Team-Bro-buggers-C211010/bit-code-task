import express from 'express';
import { addComment, getAllComments } from '../controllers/commentController.js';
import { verifyToken } from './../middleware/auth.middleware.js';
const router = express.Router();

router.get('/:id',verifyToken, getAllComments);
router.post('/', verifyToken, addComment);
router.put('/', (req, res) => {
    res.send('Edit comment of user');
});
router.delete('/', (req, res) => {
    res.send('Delete comment of user');
});

export default router;