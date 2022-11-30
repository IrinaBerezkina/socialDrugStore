export function pathMiddleware(req, res, next) {
  res.locals.url = req.url;
  res.locals.email = req.session?.user?.email;
  next();
}
