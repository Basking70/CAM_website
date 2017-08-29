'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:PublicationsCtrl
 * @description
 * # PublicationsCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('PublicationsCtrl', function ($http, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	
	
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// fetch and show the data in to Publication PAGE //////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
	
	// get data from db and show it to the table
				$http({
					method : "GET",
					url : "http://localhost:5000/api/publication",
				}).then(function mySuccess(response) {
					console.log("I got the data for publication pgae I requested");
					$scope.PublicationData = response.data;
				}, function myError(response) {
					$scope.myWelcome = "Something went wrong";
				});	
	
	// filter just forPublication 2017 section 
		$scope.Publication_2017_Filter = function(item) {
		  return (item.Year == '2017');
		};

	// filter just for Publication 2016 section 
		$scope.Publication_2016_Filter = function(item) {
		  return (item.Year == '2016');
		};
	
	// filter just for Publication 2015 section 
		$scope.Publication_2015_Filter = function(item) {
		  return (item.Year == '2015');
		};

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
	
	
	
	
	
	
	
  });
