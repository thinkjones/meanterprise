'use strict';

angular.module('app')
  .directive('projectEditor', function () {
    return {
      template: '<div ng-transclude></div>',
      restrict: 'E',
      transclude: true,
        link: function(scope, element, attrs) {
            $(element).hallo({
                plugins: {
                    'halloformat': {}
                }
            });
        }
    };
  });
