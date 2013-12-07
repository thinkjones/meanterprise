var Mongoose = require('mongoose');

module.exports = function(app, config){

    exports.UserSchema = new Mongoose.Schema({
        openId: String,
        familyName: String,
        givenName: String,
        updated: { type: Date, default: Date.now }
    });

    exports.UserSchema.statics.findAllByOpenId = function (openId, cb) {
        this.find({ openId: openId }, cb);
    }

    exports.UserSchema.statics.findByOpenId = function (openId, cb) {
        this.findOne({ openId: openId }, cb);
    }

    exports.UserSchema.statics.findOrCreateGoogleUser = function(auth, callback) {

        console.log("findOrCreate: %s", auth.openId);

        this.findAllByOpenId(auth.openId, function(err, users){

            if (!users || users.length < 1) {
                console.log(auth);

                var user = new config.model.User();
                user.openId = auth.openId;
                user.familyName = auth.profile.name.familyName;
                user.givenName = auth.profile.name.givenName;
                user.updated = new Date();

                user.save(function(error) {
                    if (error) {
                        log.error
                    } else {
                        callback(error, user);
                    }
                });
            } else {
                callback(err, users[0]);
            }

        });

    }

    return exports.UserSchema;
}
