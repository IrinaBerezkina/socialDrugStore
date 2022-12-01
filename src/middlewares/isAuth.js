const isAuth = (req, res, next) => {
  if (!req.session.user) return res.redirect('/auth');
  next();
};

export default isAuth;
