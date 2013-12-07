exports.get = function(Project) {
  return function(req, res) {
    console.log("Find projects for user: " + req.user._id);
    Project.find({userId: req.user._id }, function(error, projects) {
      res.json({ projects : projects });
    });
  }
};

exports.addProject = function(Project) {
  return function(req, res) {
    var project = new Project(req.body);
    project.updated = new Date();
    project.userId = req.user._id;

      project.save(function(error, todo) {
      if (error || !project) {
        res.json({ error : error });
      } else {
        res.json({ project : project });
      }
    });
  };
};

exports.deleteProject = function(Project) {
    return function(req, res, id) {
        var projectId = req.params.id;
        console.log("Project Id: " + projectId);

        Project.remove({_id: projectId}, function (err) {
            console.log("Removed: " + projectId);
        });

        res.json({
            projectId : projectId,
            complete : true
        });
    };
};