'use strict';

describe('Controller: SeminarsCtrl', function () {

  // load the controller's module
  beforeEach(module('camApp'));

  var SeminarsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeminarsCtrl = $controller('SeminarsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SeminarsCtrl.awesomeThings.length).toBe(3);
  });
});
