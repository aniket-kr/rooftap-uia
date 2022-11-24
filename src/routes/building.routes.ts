import { getWithinRadiusHandler } from '@src/controllers/building.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getWithinRadiusHandler);

export default router;
