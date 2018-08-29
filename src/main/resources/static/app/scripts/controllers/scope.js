'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:ScopeCtrl
 * @description
 * # ScopeCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('ScopeCtrl', function ($scope) {
      $scope.name = 'Siwoo Kim';
      $scope.reverseName = () => {
        $scope.name = $scope.name.split('').reverse().join('');
      }
  });
