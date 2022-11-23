import { Router } from 'express';
import homeRouter from '@src/routes/home.routes';

const router = Router();

router.use(homeRouter);

export default router;
