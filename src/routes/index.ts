import { Router } from 'express';
import homeRouter from '@src/routes/home.routes';
import buildingRouter from '@src/routes/building.routes';

const router = Router();

router.use(homeRouter);
router.use('/building', buildingRouter);

export default router;
