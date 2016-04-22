/*jslint browser: true*/
/*global console, Movies*/

Movies.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', 'DataService', function ($scope, $http, InitService, DataService) {
  'use strict';
  
  $scope.onItemClicked = function (movie) {
    DataService.movieClicked(movie);
  }
  
  InitService.addEventListener('ready', function () {
    DataService.getMovies('http://localhost/movies/moviedata.json').then(function (result) {
      console.log(result.data.movies);
      $scope.movies = result.data.movies;
    }, function (err) {
      console.error(err);
    });
  });
  
}]);