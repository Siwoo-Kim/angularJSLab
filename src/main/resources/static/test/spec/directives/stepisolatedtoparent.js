'use strict';

describe('Directive: stepIsolatedToParent', function () {

  // load the directive's module
  beforeEach(module('myToDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<step-isolated-to-parent></step-isolated-to-parent>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stepIsolatedToParent directive');
  }));
});
