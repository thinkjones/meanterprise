module.exports = function(app, config){

	//home route
	var homeRoute = require('../routes/home');
	app.get('/', homeRoute.index);

	//story route
	var projectRoute = require('../routes/project');
	app.get('/project/project.json', projectRoute.get(config.model.Project));
	app.post('/project/add', projectRoute.addProject(config.model.Project));
    app.delete('/project/:id', projectRoute.deleteProject(config.model.Project));

    //Authentication
    var passport = require('passport');

    // Redirect the user to Google for authentication.  When complete, Google
    // will redirect the user back to the application at
    //     /auth/google/return
    app.get('/auth/google', passport.authenticate('google'));

    // Google will redirect the user to this URL after authentication.  Finish
    // the process by verifying the assertion.  If valid, the user will be
    // logged in.  Otherwise, authentication has failed.
    app.get('/auth/google/return',
        passport.authenticate('google', { successRedirect: '/#/projects',
            failureRedirect: '/login' }));

    //Auth route
    var securityRoute = require('../routes/security');
    app.get('/current-user', securityRoute.getCurrentUser());
    app.get('/logout', securityRoute.logout());


};
