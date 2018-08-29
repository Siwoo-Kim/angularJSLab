'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:toChildScope
 * @description
 * # toChildScope
 */
angular.module('myToDoApp')
  .directive('toChildScope', function () {
    return {
      restrict: 'EA',
      scope: {
        name: '@pName'
      },
      template: '<div>Name is {{ name }}</div>' +
        'Change name <input type="text" ng-model="name">',
      link: (scope, element, attrs) => {
        attrs.$observe('pName', (name) => console.log('--->', name));
        scope.$watch('name', (newValue, oldValue) => console.log('===>', newValue, '--', oldValue));
        scope.$watch(attrs.pName, (newValue, oldValue) => console.log('++++>', newValue, '--', oldValue));
      }
    };
  });
