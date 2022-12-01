import express from 'express';
import { Drug } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const drug = await Drug.findAll();
  res.render('Layout', { drug });
});

router.get('/drugs', async (req, res) => {
  const { descending } = req.params;
  let drug;
  if (descending) {
    drug = await Drug.findAll({ order: [['price', 'DESC']] });
  } else {
    drug = await Drug.findAll({ order: [['price', 'ASC']] });
  }
  res.json(drug);
});

export default router;
