import express from 'express';
import morgan from 'morgan';
import path from 'path';
// import session from 'express-session';
// import store from 'session-file-store';
import { pathMiddleware } from './middlewares/myMiddlewares';

import indexRouter from './routers/indexRouter';
import authRouter from './routers/authRouter';
import bascketRouter from './routers/bascketRouter';
import lkRouter from './routers/lkRouter';
import customRender from './utils/customRender';

const PORT = 3000;

const app = express();
app.engine('jsx', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'jsx');
// const FileStore = store(session);

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(session(sessionConfig));

app.use(pathMiddleware);

app.use('/', indexRouter);
// app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/bascket', bascketRouter);
app.use('/lk', lkRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
