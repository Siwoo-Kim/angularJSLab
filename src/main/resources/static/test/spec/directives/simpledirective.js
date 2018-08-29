'use strict';

describe('Directive: simpleDirective', function () {

  // load the directive's module
  beforeEach(module('myToDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<simple-directive></simple-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the simpleDirective directive');
  }));
});
