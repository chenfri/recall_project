import { Router } from 'express';
import recallRouter from './recallRouter';

const router = Router();

router.use('/recall', recallRouter);

export default router; 