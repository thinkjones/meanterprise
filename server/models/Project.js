var Mongoose = require('mongoose');

module.exports = function(app, config){

    exports.ProjectSchema = new Mongoose.Schema({
      name : { type : String, required : true },
      description : { type : String, required : false },
      updated : { type : Date, required : true },
      userId : { type : String, required : true }
    });

    return exports.ProjectSchema;
}