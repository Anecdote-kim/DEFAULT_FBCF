// @flow
import express from 'express';

const router: express.Router = express.Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
  res.status(200).send('login');
});

export default router;
