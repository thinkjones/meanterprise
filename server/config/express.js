var express = require('express');
var passport = require('passport');

module.exports = function(app, config){

	app.configure(function(){
    app.use(express.compress());
    app.use(express.static(config.root +'/client/src/'));
	app.set('port', config.port);
    app.set('views', config.root + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon(config.root + '/client/src/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({ secret: '<enter your secret code>' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(function(req, res){
      res.status(404).render('404', { title: "404" });
    });
  });

};
