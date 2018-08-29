'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:simpleDirective
 * @description
 * # simpleDirective
 */
angular.module('myToDoApp')
  .directive('simpleDirective', function () {
    return {
      controller: ['$scope', (scope) =>
        scope.search = () => '---> hi peter'
      ],
      link: function (scope, element, attrs) {
        element.bind('keypress', event => {
          if(event.which == 13) {
            scope.$apply(() => {
              var msg = scope.$eval(attrs.simpleDirective);
              console.log(msg);
              console.log('--->', event.target.value);
            });
            event.preventDefault();
          }
        })
      }
    };
  });
