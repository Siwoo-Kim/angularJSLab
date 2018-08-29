'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:stepScopeFalse
 * @description
 * # stepScopeFalse
 */
angular.module('myToDoApp')
  .directive('stepScopeFalse', function () {
    return {
      restrict: 'EA',
      scope: false,
      template: '<div>Name is {{ name }}</div>' +
        'Change Name <input type="text" ng-model="name">'
    };
  });
