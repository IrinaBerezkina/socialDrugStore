import express from 'express';
import { User } from '../../db/models';
import isAuth from '../middlewares/isAuth';

const router = express.Router();

router.get('/', isAuth, (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { login, email } = req.body;
  try {
    const updUser = await User.findByPk(id);
    updUser.login = login;
    updUser.email = email;
    updUser.save();
    req.session.destroy();
    res.clearCookie('user_sid');
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

export default router;
