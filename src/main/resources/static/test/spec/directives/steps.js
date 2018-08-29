'use strict';

describe('Directive: stepS', function () {

  // load the directive's module
  beforeEach(module('myToDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<step-s></step-s>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stepS directive');
  }));
});