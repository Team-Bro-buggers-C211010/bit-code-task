import express from 'express';
import { addComment, deleteComment, getAllComments } from '../controllers/commentController.js';
import { verifyToken } from './../middleware/auth.middleware.js';
const router = express.Router();

router.get('/:id',verifyToken, getAllComments);
router.post('/', verifyToken, addComment);
router.put('/', (req, res) => {
    res.send('Edit comment of user');
});
router.delete('/:id', deleteComment);

export default router;