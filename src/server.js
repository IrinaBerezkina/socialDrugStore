import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
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

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'oh_klahoma', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  store: new FileStore(), // Место хранения сессий
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));
// app.use(currentSessionUser);

app.use(pathMiddleware);

app.use('/', indexRouter);
// app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/bascket', bascketRouter);
app.use('/lk', lkRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
