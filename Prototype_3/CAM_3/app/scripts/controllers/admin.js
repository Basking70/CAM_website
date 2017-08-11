'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('AdminCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	
		//Get Data from Jason file
	$http.get("DB/research.php").then(function (response) {
      	$scope.reData = response.data.records;
		
		$scope.ReLength = Object.keys(response).length; // double check
	
		

		
  	});
	
	
	
	
		$(document).ready(function(){
		/// btn1
			$("#myBtn1").click(function(){
				$("#myModal1").modal({backdrop: "static"});
			});
		/// btn2
			$("#myBtn2").click(function(){
				$("#myModal2").modal({backdrop: "static"});
			});
		});
  });
