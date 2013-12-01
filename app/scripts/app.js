'use strict';

angular.module('resumeApp', ['ngSanitize'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sort', {
        templateUrl: 'views/sort.html',
        controller: 'SortCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
