'use strict';

describe('Directive: toChildScope', function () {

  // load the directive's module
  beforeEach(module('myToDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<to-child-scope></to-child-scope>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the toChildScope directive');
  }));
});
