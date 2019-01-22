// @flow
import express from 'express';
import { creator, JSON } from '../../configs/types';

const router: express.Router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  const json: JSON = creator.json(true, {});
  res.status(200).json(json);
});

export default router;
