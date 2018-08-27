'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:mobiconEnter
 * @description
 * # mobiconEnter
 */
angular.module('myToDoApp')
  .directive('mobiconEnter', function () {
    return {
      controller: ['$scope', function (scope) {
        scope.search = () => '---> hi peter';
      }],
      link: function (scope, element, attrs) {
        element.bind("keypress", function (event) {
          if(event.which == 13) {
            scope.$apply(() => {
              var msg = scope.$eval(attrs.mobiconEnter);
              console.log(msg);
              console.log('===>', event.target.value);
            });
            event.preventDefault();
          }
        })
      }
    };
  });
