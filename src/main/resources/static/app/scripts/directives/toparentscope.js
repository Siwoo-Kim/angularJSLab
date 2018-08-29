'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:toParentScope
 * @description
 * # toParentScope
 */
angular.module('myToDoApp')
  .directive('toParentScope', function () {
    return {
      restrict: 'EA',
      scope: {
        name: '=pName',
        reverse: '=pReverse'
      },
      template: '<div>Name is {{ name }}</div>' +
        'Change Name <input type="text" ng-model="name" />' +
        '<br><input type="button" ng-click="reverse()" value="Reverse Name">',

    };
  });
