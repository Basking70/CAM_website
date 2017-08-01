'use strict';

describe('Controller: PublicationsCtrl', function () {

  // load the controller's module
  beforeEach(module('camApp'));

  var PublicationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PublicationsCtrl = $controller('PublicationsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PublicationsCtrl.awesomeThings.length).toBe(3);
  });
});
