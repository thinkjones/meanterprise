/** STORYARC **/
/**
 * Module dependencies.
 */

// Applicaiton config used to share between modules.
var deployed_env = process.argv[2];
var config;
require('dotenv').config()

if (deployed_env !== undefined && deployed_env.toLowerCase() === 'prod') {
    config = require('./config/config');
} else {
  config = require('./config/config');
}

//Node dependency - File System
var fs = require('fs');

//Setup require items
var express = require('express');
var Mongoose = require('mongoose');
var passport = require('passport');

// Express = Server MVC Framework.
var app = express();
require('./config/express')(app, config);

// Mongo Connection and Configuration
var db = Mongoose.createConnection(config.db);
db.on('error', function(){
  throw new Error('unable to connect to database at ' + config.db);
});

// Setup Schemas
var models_path = __dirname + '/models';
var ProjectSchema = require(models_path + '/Project')(app, config);
var UserSchema = require(models_path + '/User.js')(app, config);

var Project = db.model('projects', ProjectSchema);
config.model.Project = Project;
var User = db.model('users', UserSchema);
config.model.User = User;

// setup routing
require('./config/routes')(app, config); //Routing

//Setup Authentication
require('./config/passport')(app, config); //Auth

// start server
app.listen(config.port);
console.log("Server is listening on " + config.port);
