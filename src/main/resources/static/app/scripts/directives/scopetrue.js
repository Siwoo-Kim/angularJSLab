'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:scopeTrue
 * @description
 * # scopeTrue
 */
angular.module('myToDoApp')
  .directive('scopeTrue', function () {
    return {
      restrict: 'EA',
      scope: true,
      template: '<div>Name is {{ name }}</div>' +
        'Change Name : <input type="text" ng-model="name">'
    };
  });
