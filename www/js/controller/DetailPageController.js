/*jslint browser: true*/
/*global console, Movies*/

Movies.angular.controller('DetailPageController', ['$scope', '$http', 'InitService', 'DataService', function ($scope, $http, InitService, DataService) {
  'use strict';
  
  DataService.addEventListener('movieClicked', function (movie) {
    $scope.movie = movie;
  });
  
}]);