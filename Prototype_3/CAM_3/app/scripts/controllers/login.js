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
	
$scope.formSubmit = function() {
	$scope.test = true;
	if ($scope.username == "admin" && $scope.password == "pass")
		{
			$scope.error = " ";
			$scope.ErrAlert = false;
			$location.path('/admin');
		}
		else
		{
			$scope.test = false;
			$scope.error = "Incorrect username/password !";
			$scope.ErrAlert = true;
			
			$timeout(function () {
				$scope.ErrAlert = false;
			}, 1000);
		};
};
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	/*
	
    $scope.formSubmit = function() {
		// timeout for loading icon
		$scope.test = true;
		$timeout(function () {			
				if ($scope.username == "admin" && $scope.password == "pass")
					{
						$scope.error = " ";
						$scope.ErrAlert = false;
						$location.path('/admin');
					}
				else
					{
						$scope.error = "Incorrect username/password !";
						$scope.ErrAlert = true;
					}	
	    		$scope.myHeader = "How are you today?";
				$scope.test = false;
  			}, 1000);	
		};
  
*/




});
