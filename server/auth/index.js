const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../passport/github.js');

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback', (req, res, next) => {
  passport.authenticate('github', (err, user) => {
    if (err) { return next(err); }
    const token = jwt.sign(user, process.env.TOKEN_SECRET, {
      expiresIn: '1d'
    },
    (err, token) => {
      if (err) { return next(err); }
      else { res.json(token); }
    });
    // create a jwt with the user
  })(req, res, next);
  });
module.exports = router;

