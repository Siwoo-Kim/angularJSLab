'use strict';

describe('Controller: StepscopeCtrl', function () {

  // load the controller's module
  beforeEach(module('myToDoApp'));

  var StepscopeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StepscopeCtrl = $controller('StepscopeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StepscopeCtrl.awesomeThings.length).toBe(3);
  });
});
