'use strict';

describe('Directive: scopeFalse', function () {

  // load the directive's module
  beforeEach(module('myToDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scope-false></scope-false>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scopeFalse directive');
  }));
});
