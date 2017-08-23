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
	
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// **successfull message** ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
	
		// showing the **successfull message**
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
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// START OF RESEARCH PAGE /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of adding a new Research	
			//-------------------------
				var refresh = function(){
					// get data from db and shoe it to the table
						$http({
							method : "GET",
							url : "http://localhost:5000/api/research",
						}).then(function mySuccess(response) {
							console.log("I got the data for Research page I requested");
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
					$scope.Research.Content="";
					$scope.Research.PicUrl="";

				};

			//-------------------------
			// add a new research to the db
				$scope.AddNewResearch = function(){
					console.log($scope.Research);

					/// uploading file to the folder
					   var file = $scope.myFile;

					   console.log('file is ' );
					   console.log(file);

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
				// request to remove
				var Selected_Research_For_Deleting;
				$scope.RemoveReq = function(id){
					console.log(id);
					Selected_Research_For_Deleting = id;
					$("#myModal2").modal({backdrop: "static"});

			};
				// removing the research
				$scope.Remove = function(){
					console.log(Selected_Research_For_Deleting);

					$http({
						method : "DELETE",
						url : 'http://localhost:5000/api/research/' + Selected_Research_For_Deleting
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

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// END OF RESEARCH PAGE ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// START OF EQUIPMENT PAGE ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of adding a new Equipment	
			//-------------------------
				var Refresh_Equipment = function(){
					// get data from db and show it to the table
						$http({
							method : "GET",
							url : "http://localhost:5000/api/equipment",
						}).then(function mySuccess(response) {
							console.log("I got the data for Equipment I requested");
							$scope.EquipmentData = response.data;
						}, function myError(response) {
							$scope.myWelcome = "Something went wrong";
						});
				};
			// load data when we get the page
				Refresh_Equipment();

			//-------------------------
			// open the form for adding a new Equipment
				$scope.OpenAddEquipmentForm = function(Id)
				{
					$("#Equipment1").modal({backdrop: "static"});

				};
			//-------------------------
			// Clear the input in add a new Equipment
				$scope.ClearAddEquipment = function()
				{
					console.log("cleared!");
					$scope.Equipment.Id="";
					$scope.Equipment.Group="";
					$scope.Equipment.PicUrl="";
					$scope.Equipment.CompanyName="";
					$scope.Equipment.Name="";
					$scope.Equipment.ReadMore="";
					$scope.Equipment.Content="";
				};
			//-------------------------
			// add a new Equipment to the db
				$scope.AddNewEquipment = function(){
					console.log($scope.Equipment);

					/// uploading file to the folder
					   var file = $scope.myFile;

					   console.log('file is ' );
					   console.log(file);

					$http({
						method : "POST",
						url : "http://localhost:5000/api/equipment",
						data: $scope.Equipment
					}).then(function mySuccess(response) {
						console.log(response);
						Refresh_Equipment();
						SuccessMsg("The new Equipment was added to the system!"); // showing the message 
					}, function myError(response) {
						console.log("Something went wrong");
					});			


				};	
			//-------------------------
		// End of the whole process of adding a new Equipment		

		/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of Remove a new Equipment	
			//-------------------------	
			//sending the *Remove* request to the server
				// request to remove
				var Selected_Equipment_For_Deleting;
				$scope.RemoveReq_Equipment = function(id){
					console.log(id);
					Selected_Equipment_For_Deleting = id;
					$("#Equipment3").modal({backdrop: "static"});

			};
				// removing the research
				$scope.Remove_Equipment = function(){
					console.log(Selected_Equipment_For_Deleting);

					$http({
						method : "DELETE",
						url : 'http://localhost:5000/api/equipment/' + Selected_Equipment_For_Deleting
					}).then(function mySuccess(response) {
						Refresh_Equipment(); // refreshing the page after deleting successfully
						SuccessMsg("The new Equipment was deleted from the system!"); // showing the message 
					}, function myError(response) {
						$scope.myWelcome = "Something went wrong";
					});			

				};	
			//-------------------------
		// End of the whole process of *Remove* a new Equipment	

		/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of *Update* a new Equipment	
			//-------------------------	
			//getting the exact Equipment that we want to edit
			$scope.edit_Equipment = function(id){
				console.log(id);
						$http({
							method : 'GET',
							url : 'http://localhost:5000/api/equipment/' + id
						}).then(function mySuccess(response) {
							$("#Equipment2").modal({backdrop: "static"});
							$scope.Equipment = response.data;
						}, function myError(response) {
							$scope.myWelcome = "Something went wrong";
						});
			};
			// save the edit and send the changes to server
			$scope.update_Equipment = function(){
				console.log($scope.Equipment._id);// this put put the Equipment id to the console 
						$http({
							method : 'PUT',
							url : 'http://localhost:5000/api/equipment/' + $scope.Equipment._id, 
							data: $scope.Equipment
						}).then(function mySuccess(response) {
							Refresh_Equipment();
							SuccessMsg("The Equipment was updated!"); // showing the message 
							$scope.Equipment = response.data;
						}, function myError(response) {
							console.log("Something went wrong");
							console.log($scope.Equipment);
						});
			};
			//-------------------------
		// End of the whole process of *Update* a new Equipment		
	
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// END OF EQUIPMENT PAGE //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
	
});