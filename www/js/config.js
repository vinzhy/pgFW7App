/*jslint browser: true*/
/*global console, Movies, angular, Framework7*/

// Init angular
var Movies = {};

Movies.config = {
};

Movies.angular = angular.module('Movies', []);

Movies.fw7 = {
  app : new Framework7({
    animateNavBackIcon: true
  }),
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
};