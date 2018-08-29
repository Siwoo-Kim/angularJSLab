'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:scopeFalse
 * @description
 * # scopeFalse
 */
angular.module('myToDoApp')
  .directive('scopeFalse', function () {
    return {
      restrict: 'EA',
      scope: false,
      template: '<div>Name is {{ name }}</div>' +
        'Change Name : <input type="text" ng-model="name">'
    }
  });
