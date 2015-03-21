'use strict';

/**
 * @ngdoc function
 * @name beefHackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beefHackApp
 */
angular.module('farmware')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
