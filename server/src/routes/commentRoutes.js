import express from 'express';
import { addComment, deleteComment, editComment, getAllComments } from '../controllers/commentController.js';
import { verifyToken } from './../middleware/auth.middleware.js';
const router = express.Router();

router.get('/:id',verifyToken, getAllComments);
router.post('/', verifyToken, addComment);
router.put('/:id', editComment);
router.delete('/:id', deleteComment);

export default router;