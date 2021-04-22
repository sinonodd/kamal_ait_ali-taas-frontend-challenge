const GithubStrategy = require('passport-github').Strategy;
const passport = require('passport');

passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  }, async (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    cb(null, profile);
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //return cb(err, user);
    //});
  }
));

