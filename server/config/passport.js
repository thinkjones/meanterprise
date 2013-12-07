module.exports = function(app, config){

    var passport = require('passport')
        , GoogleStrategy = require('passport-google').Strategy;

    passport.use(new GoogleStrategy({
            returnURL: 'http://' + config.baseUrl + '/auth/google/return',
            realm: 'http://' + config.baseUrl + '/',
            stateless: true
        },
        function(identifier, profile, done) {
            config.model.User.findOrCreateGoogleUser({ openId: identifier, profile: profile }, function(err, user) {
                console.log("Users returned to passport: " + user);
                return done(err, user);
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        console.log("deserializeUser:" + id);
        config.model.User.findOne({ _id: id }, function(err, user) {
            done(err, user);
        });
    });


}