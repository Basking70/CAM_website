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
	
// Start of the whole process of adding a new Research	
	//-------------------------
		var refresh = function(){
			// get data from db and shoe it to the table
				$http({
					method : "GET",
					url : "http://localhost:5000/api/research",
				}).then(function mySuccess(response) {
					console.log("I got the data I requested");
					$scope.ResearchData = response.data;
				}, function myError(response) {
					$scope.myWelcome = "Something went wrong";
				});
		};
	
	// load data when we get the page
	refresh();
	
	//-------------------------
	// open the form for adding a new reaserch
		$scope.OpenAddResearchForm = function(Id)
		{
			$("#myModal1").modal({backdrop: "static"});

		};
	//-------------------------
	// Clear the input in add a new reaserch
		$scope.ClearAddResearch = function()
		{
			console.log("cleared!");
			$scope.Research.Id="";
			$scope.Research.Name="";
			$scope.Research.People="";
			$scope.Research.Email="";
			$scope.Research.Content="";
			$scope.Research.PicUrl="";
		
		};
	
	//-------------------------
	// add a new research to the db
		$scope.AddNewResearch = function(){
			console.log($scope.Research);
			
			$http({
				method : "POST",
				url : "http://localhost:5000/api/research",
				data: $scope.Research
			}).then(function mySuccess(response) {
				console.log(response);
				refresh();
				SuccessMsg("The new research was added to the system!"); // showing the message 
			}, function myError(response) {
				console.log("Something went wrong");
			});			

	
		};	
	//-------------------------
// End of the whole process of adding a new Research		
	
/////////////////////////////////////////////////////////////////////////////////////////
	
// Start of the whole process of Remove a new Research	
	//-------------------------	
	//sending the *Remove* request to the server
	$scope.remove = function(id){
		console.log(id);
		
		$http({
			method : "DELETE",
			url : 'http://localhost:5000/api/research/' + id
		}).then(function mySuccess(response) {
			refresh(); // refreshing the page after deleting successfully
			SuccessMsg("The new research was deleted from the system!"); // showing the message 
		}, function myError(response) {
			$scope.myWelcome = "Something went wrong";
		});			

	};
	
	//-------------------------
// End of the whole process of *Remove* a new Research	
	
/////////////////////////////////////////////////////////////////////////////////////////
	
// Start of the whole process of *Update* a new Research	
	//-------------------------	
	//getting the exact research that we want to edit
	$scope.edit = function(id){
		console.log(id);
				$http({
					method : 'GET',
					url : 'http://localhost:5000/api/research/' + id
				}).then(function mySuccess(response) {
					$("#myModal").modal({backdrop: "static"});
					$scope.Research = response.data;
				}, function myError(response) {
					$scope.myWelcome = "Something went wrong";
				});
	};
	// save the edit and send the changes to server
	$scope.update = function(){
		console.log($scope.Research._id);// this put put the research id to the console 
		

				$http({
					method : 'PUT',
					url : 'http://localhost:5000/api/research/' + $scope.Research._id, 
					data: $scope.Research
				}).then(function mySuccess(response) {
					refresh();
					SuccessMsg("The research was updated!"); // showing the message 
					$scope.Research = response.data;
				}, function myError(response) {
					console.log("Something went wrong");
					console.log($scope.Research);
				});
		
		
	};
	//-------------------------
// End of the whole process of *Update* a new Research	

/////////////////////////////////////////////////////////////////////////////////////////

// showing the successfull message
	var SuccessMsg = function(Msg)
	{ 
		$scope.SavingTxt = Msg; // saving message
		$scope.SavingAlert = true; // show the saving alert message
		// close the saving alert message after 1.5 sec
		$timeout(function () {
			$scope.SavingAlert = false;
		}, 2000);
	}
// End of the showing the successfull message

/////////////////////////////////////////////////////////////////////////////////////////		
		

	
	
	
	
	
	//uploading picture
		$scope.dataform={};
		$scope.submitCuisine=function(isvalid){
			if(isvalid){
				var fd=new FormData();
				angular.forEach($scope.files,function(file){
					fd.append('file',file);
				});

				fd.append('formdata',JSON.stringify($scope.dataform));
				$http.post('admin/managecuisineAdd',fd,{
					transformRequest:angular.identity,
					headers:{'Content-type':undefined}
				}).success(function(data){
					$scope.status=data;
					$scope.itemlist.push(data)
					$scope.message="New Dish Added Successfully"
				});
			}	
		}
	//-------------------------
  });
