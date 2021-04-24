const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../passport/github.js');

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback', (req, res, next) => {
<<<<<<< HEAD
  passport.authenticate('github',async (err, user) => {
    if (err) { return next(err); }
    const payload = {
      id: user.id,
      username: user.username,
      avatar: user.photos[0],
    };
    const token = await jwt.sign(payload, process.env.TOKEN_SECRET, {
=======
  passport.authenticate('github', (err, user) => {
    if (err) { return next(err); }
    const token = jwt.sign(user, process.env.TOKEN_SECRET, {
>>>>>>> c10e3dd57d636642888ed6069f2741a474692605
      expiresIn: '1d'
    },
    (err, token) => {
      if (err) { return next(err); }
<<<<<<< HEAD
      res.redirect(`${process.env.CLIENT_REDIRECT}${token}`)
=======
      else { res.json(token); }
>>>>>>> c10e3dd57d636642888ed6069f2741a474692605
    });
    // create a jwt with the user
  })(req, res, next);
  });
module.exports = router;

