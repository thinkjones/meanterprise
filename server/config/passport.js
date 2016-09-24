module.exports = function (app, config) {

  var passport = require('passport');
  var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

  passport.use(new GoogleStrategy({
      clientID: config.google.GOOGLE_CONSUMER_KEY,
      clientSecret: config.google.GOOGLE_CONSUMER_SECRET,
      callbackURL: 'http://' + config.baseUrl + '/auth/google/return'
    },
    function (token, tokenSecret, profile, done) {
      config.model.User.findOrCreateGoogleUser({openId: profile.id, profile: profile}, function (err, user) {
        console.log("Users returned to passport: " + user);
        return done(err, user);
      });
    }
  ));

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    console.log("deserializeUser:" + id);
    config.model.User.findOne({_id: id}, function (err, user) {
      done(err, user);
    });
  });


}
