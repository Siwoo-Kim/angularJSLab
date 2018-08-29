'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:stepIsolatedToParent
 * @description
 * # stepIsolatedToParent
 */
angular.module('myToDoApp')
  .directive('stepIsolatedToParent', function () {
    return {
      restrict: 'E',
      scope: {
        name: '=pName',
        reverse: '=pReverse',
      },
      template: '<div>Name is {{ name }}</div>' +
        'Change Name <input type="text" ng-model="name">' +
        '<br><button ng-click="reverse()" value="Reverse" />',
    };
  });
