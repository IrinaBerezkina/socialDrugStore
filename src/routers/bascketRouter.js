import express from 'express';
import { Bascket, Drug } from '../../db/models';
import isAuth from '../middlewares/isAuth';

const router = express.Router();

router.get('/', isAuth, async (req, res) => {
  try {
    const drugs = await Bascket.findAll({
      where: { user_id: req.session?.user?.id },
      include: Drug,
    });
    const initState = { drugs };
    res.render('Layout', initState);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/del/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Drug.destroy({ where: { id } });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
