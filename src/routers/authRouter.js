import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();

router.get('/reg', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.post('/reg', async (req, res) => {
  console.log(req.body, 'reqbody');
  const { login, email, pass: password } = req.body;
  const pass = await bcrypt.hash(password, 7);
  const currUser = await User.create({ login, email, pass });
  req.session.user = {
    id: currUser.id,
    login: currUser.login,
    email: currUser.email,
  };
  res.sendStatus(200);
});

router.post('/', async (req, res) => {
  console.log(req.body, 'reQBODY');
  const { login, pass: password } = req.body;
  const currUser = await User.findOne({ where: { login } });
  const compare = await bcrypt.compare(password, currUser.pass);
  if (compare) {
    req.session.user = {
      id: currUser.id,
      login: currUser.login,
      email: currUser.email,
    };
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/auth');
});

export default router;
