(function(exports){

    var config = {

        /* List all the roles you wish to use in the app
         * You have a max of 31 before the bit shift pushes the accompanying integer out of
         * the memory footprint for an integer
         */
        roles :[
            'public',
            'user',
            'admin'],

        /*
         Build out all the access levels you want referencing the roles listed above
         You can use the "*" symbol to represent access to all roles
         */
        accessLevels : {
            'public' : "*",
            'anon': ['public'],
            'user' : ['user', 'admin'],
            'admin': ['admin']
        }
    }

    exports.userRoles = config.roles;
    exports.accessLevels = config.accessLevels;

})(typeof exports === 'undefined' ? this['securityConfig'] = {} : exports);