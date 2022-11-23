import { indexHandler } from '@src/controllers/home.controller';
import { Router } from 'express';

const router = Router();

router.get('/', indexHandler);

export default router;
