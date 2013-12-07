'use strict';

angular.module('app')
  .controller('HeaderCtrl', ['$scope', '$location', 'security', function ($scope, $location, security) {

    $scope.navbarState = {
        message: 'here is a message',
        currentRoute: 'home',
    };

    $scope.isAuthenticated = security.isAuthenticated;

    $scope.navClass = function (page) {
        var rootTokens = $location.path().split('/');
        var baseRouteToken = (rootTokens.length > 0 ? rootTokens[1] : $location.path()) || 'home';
        return page === baseRouteToken ? 'active' : '';
    };


        /**
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
     **/

    }]);
