import { Router } from 'express';
import { getRecallData } from '../controllers/recallController';

const router = Router();


router.get('/', getRecallData);

export default router; 