'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('myToDoApp')
  .directive('myDirective', function () {
    return {
      scope: true,
      template: '<div>Name is : {{ name }}</div>' +
        'Change Name: <input type="text" ng-model="name">',
      restrict: 'EA'
    };
  });
