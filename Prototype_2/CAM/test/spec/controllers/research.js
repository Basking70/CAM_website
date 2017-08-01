'use strict';

describe('Controller: ResearchCtrl', function () {

  // load the controller's module
  beforeEach(module('camApp'));

  var ResearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResearchCtrl = $controller('ResearchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResearchCtrl.awesomeThings.length).toBe(3);
  });
});
