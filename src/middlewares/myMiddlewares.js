export function pathMiddleware(req, res, next) {
  res.locals.url = req.url;
  res.locals.user = req.session?.user;
  next();
}
