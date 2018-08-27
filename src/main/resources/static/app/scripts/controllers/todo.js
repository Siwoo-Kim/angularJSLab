'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('TodoCtrl', function ($scope) {
      $scope.todos = [];
      $scope.addToDo = () => {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };
      $scope.removeToDo = (_index) => $scope.todos.splice(_index, 1);
      $scope.name = 'Peter Yun';
      $scope.reverseName = () => {
        $scope.name = $scope.name.split('').reverse().join('');
      }
  });
