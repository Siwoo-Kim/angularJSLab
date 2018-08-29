'use strict';

describe('Directive: stepIsolatedBiDirectional', function () {

  // load the directive's module
  beforeEach(module('myToDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<step-isolated-bi-directional></step-isolated-bi-directional>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stepIsolatedBiDirectional directive');
  }));
});
