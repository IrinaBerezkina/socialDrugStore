import express from 'express';
import { Bascket, Drug } from '../../db/models';
import isAuth from '../middlewares/isAuth';

const router = express.Router();

router.get('/', isAuth, async (req, res) => {
  try {
    const drugsAll = JSON.parse(JSON.stringify(await Bascket.findAll({
      where: { user_id: req.session?.user?.id },
      include: Drug,
    })));
    const drugs = drugsAll.map((el) => ({
      id: el.Drug.id,
      title: el.Drug.title,
      price: el.Drug.price,
      img: el.Drug.img,
      is_free: el.is_free,
    }));

    const initState = { drugs };
    res.render('Layout', initState);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  const { id, is_free } = req.body;
  try {
    await Bascket.create({ user_id: req.session?.user?.id, drug_id: id, is_free });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/del/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Bascket.destroy({ where: { drug_id: id } });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/deleteAll', async (req, res) => {
  try {
    await Bascket.destroy({ where: { user_id: req.session?.user?.id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
export default router;
