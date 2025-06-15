import express from 'express';
import { verifyToken } from '../middleware/auth.middleware.js';
import { getAllRoadmaps, getRoadmapById, upvoteRoadmap } from '../controllers/roadmapController.js';
const router = express.Router();

router.get('/', getAllRoadmaps);

router.get('/:id', getRoadmapById);

router.put('/:id/upvote', verifyToken , upvoteRoadmap);

export default router;