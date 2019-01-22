// @flow
import express from 'express';
import login from './login';
import validate from './validate';

const router: express.Router = express.Router();

router.use('/login', login);
router.use('/validate', validate);

export default router;
