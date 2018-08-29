'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:stepIsolatedBiDirectional
 * @description
 * # stepIsolatedBiDirectional
 */
angular.module('myToDoApp')
  .directive('stepIsolatedBiDirectional', function () {
    return {
      restrict: 'EA',
      scope: {
        name: '=pName'
      },
      template: '<div>Name is {{ name }}</div>' +
        'Change Name : <input type="text" ng-model="name">',
    };
  });
