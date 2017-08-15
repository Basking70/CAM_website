'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('AdminCtrl', function ($scope, $http, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	
		//Get Data from Jason file
	$http.get("DB/research.php").then(function (response) {
      	$scope.ResearchData = response.data.records;
		
		$scope.ReLength = Object.keys(response).length; // double check
	});
	
	// getting information from table
		$scope.editResearch = function(Id)
		{
			$("#myModal").modal({backdrop: "static"});
			$scope.Sid =  Id;
			$scope.Sname = $scope.ResearchData[Id].Name;
			$scope.Speople = $scope.ResearchData[Id].People; 
			$scope.Semail = $scope.ResearchData[Id].Email;
			$scope.Scontent = $scope.ResearchData[Id].Content;
		}
		
	// Saving changes
		$scope.SaveResearch = function(Id)
		{
			//$scope.ResearchData[Id].Name = $scope.Sname;
			//$scope.ResearchData[Id].People = $scope.Speople;
			//$scope.ResearchData[Id].Email = $scope.Semail; 
			//$scope.ResearchData[Id].Content = $scope.Scontent;
			
			// sending the saving message 
				$scope.SavingTxt = "Your changes was saved!"; // saving message
				$scope.SavingAlert = true; // show the saving alert message

				// close the saving alert message after 1.5 sec
				$timeout(function () {
					$scope.SavingAlert = false;
				}, 1500);
		}
	
  });
