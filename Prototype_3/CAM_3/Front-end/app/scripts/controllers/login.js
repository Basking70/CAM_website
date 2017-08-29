'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('LoginCtrl', function ($scope , $location, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	//run the submit bottum
	$scope.formSubmit = function() {
		//check fo the username & password
		if ($scope.username == "admin" && $scope.password == "pass")
			{
				$scope.ErrAlert = false; // dosent show the alet message
				$location.path('/vkjvkjk646jfdkjjdgvsldkjvbsjhv2423JSDGVSKJDVJSD7527235632MXHBVKDJVKSDJV'); //redirect to the admin page
			}
			else
			{
				$scope.error = "Incorrect username/password !"; // error message
				$scope.ErrAlert = true; // show the alert message

				// close the alert message after 2 sec
				$timeout(function () {
					$scope.ErrAlert = false;
				}, 2000);
			};
	};
});
