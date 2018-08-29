'use strict';

describe('Directive: stepScopeTrue', function () {

  // load the directive's module
  beforeEach(module('myToDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<step-scope-true></step-scope-true>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stepScopeTrue directive');
  }));
});
