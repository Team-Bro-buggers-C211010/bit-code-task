import express from 'express';
import { isAdmin, verifyToken } from '../middleware/auth.middleware.js';
import { addRoadmap, getAllRoadmaps, getRoadmapById, upvoteRoadmap } from '../controllers/roadmapController.js';
const router = express.Router();

router.get('/', verifyToken ,getAllRoadmaps);

router.get('/:id', verifyToken, getRoadmapById);

router.put('/:id/upvote', verifyToken , upvoteRoadmap);

router.post('/', verifyToken, isAdmin, addRoadmap);

export default router;