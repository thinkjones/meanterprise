var filterUser = function( user ) {
    if ( user ) {
        return {
            user : {
                id: user._id,
                familyName: user.familyName,
                givenName: user.givenName,
                admin: false
            }
        };
    } else {
        return {
            user : null
        };
    }
};

exports.getCurrentUser = function() {
    return function(req, res) {
        res.json(filterUser(req.user));
    }
};

exports.logout = function() {
    return function(req, res) {
        req.logout();
        res.redirect('/');
    }
};

