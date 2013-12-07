'use strict';

angular.module('app')
  .controller('MainCtrl', ['$scope', 'security', function ($scope, security) {

        $scope.isAuthenticated = security.isAuthenticated;

  }]);
