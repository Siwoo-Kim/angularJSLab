'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:StepscopeCtrl
 * @description
 * # StepscopeCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('StepscopeCtrl', function ($scope) {
      $scope.name = 'Siwoo Kim';
      $scope.reverseName = () => $scope.name = $scope.name.split('').reverse().join('');
  });
