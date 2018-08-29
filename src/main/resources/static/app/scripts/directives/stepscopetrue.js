'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:stepScopeTrue
 * @description
 * # stepScopeTrue
 */
angular.module('myToDoApp')
  .directive('stepScopeTrue', function () {
    return {
      restrict: 'EA',
      scope: true,
      template: '<div>Name is {{ name }}</div>' +
        'Change Name <input type="text" ng-model="name">',
    };
  });
