'use strict';

angular.module('app')
  .directive('projectLink', function () {
    return {
      template: '<a ng-href="#/projects/{{project.id}}/" ng-transclude></a>',
      restrict: 'E',
      transclude: true
    };
  });
