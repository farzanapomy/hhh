const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use((req, res, next) => {
  if (!req.cookies.visited) {
    res.cookie('visited', 'true', {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
  }
  next();
});
