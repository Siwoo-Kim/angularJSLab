'use strict';

describe('Controller: ScopeCtrl', function () {

  // load the controller's module
  beforeEach(module('myToDoApp'));

  var ScopeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScopeCtrl = $controller('ScopeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScopeCtrl.awesomeThings.length).toBe(3);
  });
});
