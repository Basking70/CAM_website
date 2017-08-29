
'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('GalleryCtrl', function ($http, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	baguetteBox.run('.tz-gallery');
	
	
	
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// fetch and show the data in to Gallery PAGE ////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
	
	// get data from db and show it to the table
				$http({
					method : "GET",
					url : "http://localhost:5000/api/gallery",
				}).then(function mySuccess(response) {
					console.log("I got the data for Gallery page I requested");
					$scope.GalleryData = response.data;
				}, function myError(response) {
					$scope.myWelcome = "Something went wrong";
				});	
});
