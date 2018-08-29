'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:stepIsolatedFromParent
 * @description
 * # stepIsolatedFromParent
 */
angular.module('myToDoApp')
  .directive('stepIsolatedFromParent', function () {
    return {
      restrict: 'EA',
      scope: {
        name: '@pName'
      },
      template: '<div>Name is {{ name }}</div>' +
        'Change Name <input type="text" ng-model="name">',
    };
  });
