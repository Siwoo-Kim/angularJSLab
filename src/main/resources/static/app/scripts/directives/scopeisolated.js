'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:scopeIsolated
 * @description
 * # scopeIsolated
 */
angular.module('myToDoApp')
  .directive('scopeIsolated', function () {
    return {
      restrict: 'EA',
      scope: {},
      template: '<div>Name is : {{ name }}</div>' +
        'Change Name : <input type="text" ng-model="name">',

    };
  });
