import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { login, email } = req.body;
  const updUser = await User.findByPk(id);
  updUser.login = login;
  updUser.email = email;
  updUser.save();
  res.json(updUser);
});

export default router;
