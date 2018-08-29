'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:stepS
 * @description
 * # stepS
 */
angular.module('myToDoApp')
  .directive('stepS', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the stepS directive');
      }
    };
  });
