'use strict';

/**
 * @ngdoc function
 * @name beefHackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beefHackApp
 */
angular.module('farmware')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
