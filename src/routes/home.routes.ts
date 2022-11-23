import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('splash-screen', { name: 'Aniket Kumar', title: 'My Title' });
});

export default router;
