const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../passport/github.js');

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback', (req, res, next) => {
  passport.authenticate('github',async (err, user) => {
    if (err) { return next(err); }
    const payload = {
      id: user.id,
      username: user.username,
      avatar: user.photos[0],
    };
    const token = await jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: '1d'
    },
    (err, token) => {
      if (err) { return next(err); }
      res.redirect(`${process.env.CLIENT_REDIRECT}${token}`)
    });
    // create a jwt with the user
  })(req, res, next);
  });
module.exports = router;

