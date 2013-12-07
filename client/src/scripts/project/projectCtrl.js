'use strict';

angular.module('app').controller('ProjectCtrl', ['$scope', '$http', '$timeout', 'security', function($scope, $http, $timeout, security) {

	$scope.projects = [];
	
	$scope.newProject = {
		name : 'Gene\'s Name'
	};

	$scope.setProjects = function(projects) {
		$scope.projects = projects;
	};

	$scope.updateList = function() {

		$http.get('/project/project.json').success(function(data) {
            _.each(data.projects, function(item){
                item.id = item._id;
            });
            $scope.projects = data.projects;
		});

		$timeout(function() {
			$scope.updateList();
		}, 30 * 60 * 1000);
		// update every 30 minutes;
	};

	$timeout(function() {
		$scope.updateList();
	}, 30 * 60 * 1000);
	// update every 30 minutes;

	$scope.updateList();

	$scope.addNewProject = function() {
		console.log("Add New Project");
		$http.post('/project/add/', $scope.newProject).success(function(data) {
			if (data.project) {
                data.project.id = data.project._id;
				$scope.projects.push(data.project);
				$scope.newProject.name = '';
			} else {
				alert(JSON.stringify(data));
			}
		});
	};

    $scope.deleteProject = function() {
        console.log("Delete this project");
        $http.delete('/project/' + this.project._id).success(function(data) {
            $scope.updateList();
        });
    }

}]);
