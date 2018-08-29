'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:biDirectionalScope
 * @description
 * # biDirectionalScope
 */
angular.module('myToDoApp')
  .directive('biDirectionalScope', function () {
    return {
      restrict: 'EA',
      scope: {
        name: '=pName'
      },
      template: '<div>Name is {{ name }}</div>' +
        'Change name <input type="text" ng-model="name">',
    };
  });
