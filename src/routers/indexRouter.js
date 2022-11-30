import express from 'express';
import { Drug } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const drug = await Drug.findAll();
  res.render('Layout', { drug });
});

export default router;
