/*jslint browser: true*/
/*global console, Framework7, Movies*/

Movies.angular.factory('DataService', ['$http', function ($http) {
  'use strict';

  var pub = {},
    eventListeners = {
      'movieClicked' : []
    };
  
  pub.addEventListener = function (eventName, callback) {
    eventListeners[eventName].push(callback);
  };
  
  pub.movieClicked = function (movie) {
    for (var i=0; i<eventListeners.movieClicked.length; i++) {
      eventListeners.movieClicked[i](movie);
    }
  };
  
  pub.getMovies = function () {
    return $http.get('moviedata.json');
  };
  
  return pub;
  
}]);