'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:vkjvkjk646jfdkjjdgvsldkjvbsjhv2423JSDGVSKJDVJSD7527235632MXHBVKDJVKSDJVCtrl
 * @description
 * # vkjvkjk646jfdkjjdgvsldkjvbsjhv2423JSDGVSKJDVJSD7527235632MXHBVKDJVKSDJVCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('vkjvkjk646jfdkjjdgvsldkjvbsjhv2423JSDGVSKJDVJSD7527235632MXHBVKDJVKSDJVCtrl', function ($scope, $http, $timeout) {
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
					$scope.Research.ReferenceShow="";
					$scope.Research.Reference="";
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
						$http.post('vkjvkjk646jfdkjjdgvsldkjvbsjhv2423JSDGVSKJDVJSD7527235632MXHBVKDJVKSDJV/managecuisineAdd',fd,{
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
							console.log("I got the data for Equipment page I requested");
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


//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// START OF People PAGE ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of adding a new Person	
			//-------------------------
				var Refresh_People = function(){
					// get data from db and show it to the table
						$http({
							method : "GET",
							url : "http://localhost:5000/api/People",
						}).then(function mySuccess(response) {
							console.log("I got the data for People page I requested");
							$scope.PeopleData = response.data;
						}, function myError(response) {
							$scope.myWelcome = "Something went wrong";
						});
				};
			// load data when we get the page
				Refresh_People();

			//-------------------------
			// open the form for adding a new Equipment
				$scope.OpenAddPeopleForm = function(Id)
				{
					$("#People1").modal({backdrop: "static"});

				};
			//-------------------------
			// Clear the input in add a new Equipment
				$scope.ClearAddPeople = function()
				{
					console.log("cleared!");
					$scope.People.Id="";
					$scope.People.Group="";
					$scope.People.Name="";
					$scope.People.Title="";
					$scope.People.ResearchArea="";
					$scope.People.CurrentProjects="";
					$scope.People.Email="";
					$scope.People.Phone="";
					$scope.People.Website="";
					$scope.People.PicUrl="";
				};
			//-------------------------
			// add a new People to the db
				$scope.AddNewPeople = function(){
					console.log($scope.People);

					/// uploading file to the folder
					   var file = $scope.myFile;

					   console.log('file is ' );
					   console.log(file);

					$http({
						method : "POST",
						url : "http://localhost:5000/api/People",
						data: $scope.People
					}).then(function mySuccess(response) {
						console.log(response);
						Refresh_People();
						SuccessMsg("The new Person was added to the system!"); // showing the message 
					}, function myError(response) {
						console.log("Something went wrong");
					});			


				};	
			//-------------------------
		// End of the whole process of adding a new Person		

		/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of Remove a new Person	
			//-------------------------	
			//sending the *Remove* request to the server
				// request to remove
				var Selected_People_For_Deleting;
				$scope.RemoveReq_People = function(id){
					console.log(id);
					Selected_People_For_Deleting = id;
					$("#People3").modal({backdrop: "static"});

			};
				// removing the People
				$scope.Remove_People = function(){
					console.log(Selected_People_For_Deleting);

					$http({
						method : "DELETE",
						url : 'http://localhost:5000/api/People/' + Selected_People_For_Deleting
					}).then(function mySuccess(response) {
						Refresh_People(); // refreshing the page after deleting successfully
						SuccessMsg("The Person was deleted from the system!"); // showing the message 
					}, function myError(response) {
						$scope.myWelcome = "Something went wrong";
					});			

				};	
			//-------------------------
		// End of the whole process of *Remove* a new Person	

		/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of *Update* a new Person	
			//-------------------------	
			//getting the exact Person that we want to edit
			$scope.edit_People = function(id){
				console.log(id);
						$http({
							method : 'GET',
							url : 'http://localhost:5000/api/People/' + id
						}).then(function mySuccess(response) {
							$("#People2").modal({backdrop: "static"});
							$scope.People = response.data;
						}, function myError(response) {
							$scope.myWelcome = "Something went wrong";
						});
			};
			// save the edit and send the changes to server
			$scope.update_People = function(){
				console.log($scope.People._id);// this put put the Equipment id to the console 
						$http({
							method : 'PUT',
							url : 'http://localhost:5000/api/People/' + $scope.People._id, 
							data: $scope.People
						}).then(function mySuccess(response) {
							Refresh_People();
							SuccessMsg("The People was updated!"); // showing the message 
							$scope.People = response.data;
						}, function myError(response) {
							console.log("Something went wrong");
							console.log($scope.People);
						});
			};
			//-------------------------
		// End of the whole process of *Update* a new People		
	
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// END OF People PAGE //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// START OF Gallery PAGE ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of adding a new pic	
			//-------------------------
				var Refresh_Gallery = function(){
					// get data from db and show it to the table
						$http({
							method : "GET",
							url : "http://localhost:5000/api/Gallery",
						}).then(function mySuccess(response) {
							console.log("I got the data for Gallery page I requested");
							$scope.GalleryData = response.data;
						}, function myError(response) {
							$scope.myWelcome = "Something went wrong";
						});
				};
			// load data when we get the page
				Refresh_Gallery();

			//-------------------------
			// open the form for adding a new pic
				$scope.OpenAddGalleryForm = function(Id)
				{
					$("#Gallery1").modal({backdrop: "static"});

				};
			//-------------------------
			// Clear the input in add a new pic
				$scope.ClearAddGallery = function()
				{
					console.log("cleared!");
					$scope.Gallery.Id="";
					$scope.Gallery.Name="";
					$scope.Gallery.PicUrl="";
				};
			//-------------------------
			// add a new pic to the db
				$scope.AddNewGallery= function(){
					console.log($scope.Gallery);

					/// uploading file to the folder
					   var file = $scope.myFile;

					   console.log('file is ' );
					   console.log(file);

					$http({
						method : "POST",
						url : "http://localhost:5000/api/Gallery",
						data: $scope.Gallery
					}).then(function mySuccess(response) {
						console.log(response);
						Refresh_Gallery();
						SuccessMsg("The new pic was added to the system!"); // showing the message 
					}, function myError(response) {
						console.log("Something went wrong");
					});			


				};	
			//-------------------------
		// End of the whole process of adding a new picture		

		/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of Remove a new pic	
			//-------------------------	
			//sending the *Remove* request to the server
				// request to remove
				var Selected_Gallery_For_Deleting;
				$scope.RemoveReq_Gallery = function(id){
					console.log(id);
					Selected_Gallery_For_Deleting = id;
					$("#Gallery3").modal({backdrop: "static"});

			};
				// removing the Gallery
				$scope.Remove_Gallery = function(){
					console.log(Selected_Gallery_For_Deleting);

					$http({
						method : "DELETE",
						url : 'http://localhost:5000/api/Gallery/' + Selected_Gallery_For_Deleting
					}).then(function mySuccess(response) {
						Refresh_Gallery(); // refreshing the page after deleting successfully
						SuccessMsg("The pic was deleted from the system!"); // showing the message 
					}, function myError(response) {
						$scope.myWelcome = "Something went wrong";
					});			

				};	
			//-------------------------
		// End of the whole process of *Remove* a new pic	
		
	
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// END OF Gallery PAGE //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// START OF News PAGE ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of adding a new News	
			//-------------------------
				var Refresh_News = function(){
					// get data from db and show it to the table
						$http({
							method : "GET",
							url : "http://localhost:5000/api/News",
						}).then(function mySuccess(response) {
							console.log("I got the data for News page I requested");
							$scope.NewsData = response.data;
						}, function myError(response) {
							$scope.myWelcome = "Something went wrong";
						});
				};
			// load data when we get the page
				Refresh_News();

			//-------------------------
			// open the form for adding a new Equipment
				$scope.OpenAddNewsForm = function(Id)
				{
					$("#News1").modal({backdrop: "static"});

				};
			//-------------------------
			// Clear the input in add a new Equipment
				$scope.ClearAddNews = function()
				{
					console.log("cleared!");
					$scope.News.Id="";
					$scope.News.Caption="";
					$scope.News.PicUrl="";
				};
			//-------------------------
			// add a new News to the db
				$scope.AddNewNews = function(){
					console.log($scope.News);

					/// uploading file to the folder
					   var file = $scope.myFile;

					   console.log('file is ' );
					   console.log(file);

					$http({
						method : "POST",
						url : "http://localhost:5000/api/News",
						data: $scope.News
					}).then(function mySuccess(response) {
						console.log(response);
						Refresh_News();
						SuccessMsg("The new News was added to the system!"); // showing the message 
					}, function myError(response) {
						console.log("Something went wrong");
					});			


				};	
			//-------------------------
		// End of the whole process of adding a new News		

		/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of Remove a new News	
			//-------------------------	
			//sending the *Remove* request to the server
				// request to remove
				var Selected_News_For_Deleting;
				$scope.RemoveReq_News = function(id){
					console.log(id);
					Selected_News_For_Deleting = id;
					$("#News3").modal({backdrop: "static"});

			};
				// removing the News
				$scope.Remove_News = function(){
					console.log(Selected_News_For_Deleting);

					$http({
						method : "DELETE",
						url : 'http://localhost:5000/api/News/' + Selected_News_For_Deleting
					}).then(function mySuccess(response) {
						Refresh_News(); // refreshing the page after deleting successfully
						SuccessMsg("The Person was deleted from the system!"); // showing the message 
					}, function myError(response) {
						$scope.myWelcome = "Something went wrong";
					});			

				};	
			//-------------------------
		// End of the whole process of *Remove* a new News	

		/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of *Update* a new News	
			//-------------------------	
			//getting the exact Person that we want to edit
			$scope.edit_News = function(id){
				console.log(id);
						$http({
							method : 'GET',
							url : 'http://localhost:5000/api/News/' + id
						}).then(function mySuccess(response) {
							$("#News2").modal({backdrop: "static"});
							$scope.News = response.data;
						}, function myError(response) {
							$scope.myWelcome = "Something went wrong";
						});
			};
			// save the edit and send the changes to server
			$scope.updateNews = function(){
				console.log($scope.News._id);// this put put the Equipment id to the console 
						$http({
							method : 'PUT',
							url : 'http://localhost:5000/api/News/' + $scope.News._id, 
							data: $scope.News
						}).then(function mySuccess(response) {
							Refresh_News();
							SuccessMsg("The News was updated!"); // showing the message 
							$scope.News = response.data;
						}, function myError(response) {
							console.log("Something went wrong");
							console.log($scope.News);
						});
			};
			//-------------------------
		// End of the whole process of *Update* a new News		
	
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// END OF News PAGE /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// START OF Publication PAGE ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of adding a new Publication	
			//-------------------------
				var Refresh_Publication = function(){
					// get data from db and show it to the table
						$http({
							method : "GET",
							url : "http://localhost:5000/api/publication",
						}).then(function mySuccess(response) {
							console.log("I got the data for Publication page I requested");
							$scope.PublicationData = response.data;
						}, function myError(response) {
							$scope.myWelcome = "Something went wrong";
						});
				};
			// load data when we get the page
				Refresh_Publication();

			//-------------------------
			// open the form for adding a new Equipment
				$scope.OpenAddPublicationForm = function(Id)
				{
					$("#Publication1").modal({backdrop: "static"});

				};
			//-------------------------
			// Clear the input in add a new Equipment
				$scope.ClearAddPublication = function()
				{
					console.log("cleared!");
					$scope.Publication.Id="";
					$scope.Publication.Authors="";
					$scope.Publication.Name="";
					$scope.Publication.Location="";
					$scope.Publication.Year="";
				};
			//-------------------------
			// add a new Equipment to the db
				$scope.AddNewPublication = function(){
					console.log($scope.Publication);

					/// uploading file to the folder
					   var file = $scope.myFile;

					   console.log('file is ' );
					   console.log(file);

					$http({
						method : "POST",
						url : "http://localhost:5000/api/publication",
						data: $scope.Publication
					}).then(function mySuccess(response) {
						console.log(response);
						Refresh_Publication();
						SuccessMsg("The new Publication was added to the system!"); // showing the message 
					}, function myError(response) {
						console.log("Something went wrong");
					});			


				};	
			//-------------------------
		// End of the whole process of adding a new Publication		

		/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of Remove a new Publication	
			//-------------------------	
			//sending the *Remove* request to the server
				// request to remove
				var Selected_Publication_For_Deleting;
				$scope.RemoveReq_Publication = function(id){
					console.log(id);
					Selected_Publication_For_Deleting = id;
					$("#Publication3").modal({backdrop: "static"});

			};
				// removing the Publication
				$scope.Remove_Publication = function(){
					console.log(Selected_Publication_For_Deleting);

					$http({
						method : "DELETE",
						url : 'http://localhost:5000/api/publication/' + Selected_Publication_For_Deleting
					}).then(function mySuccess(response) {
						Refresh_Publication(); // refreshing the page after deleting successfully
						SuccessMsg("The new Publication was deleted from the system!"); // showing the message 
					}, function myError(response) {
						$scope.myWelcome = "Something went wrong";
					});			

				};	
			//-------------------------
		// End of the whole process of *Remove* a new Publication	

		/////////////////////////////////////////////////////////////////////////////////////////

		// Start of the whole process of *Update* a new Publication	
			//-------------------------	
			//getting the exact Equipment that we want to edit
			$scope.edit_Publication = function(id){
				console.log(id);
						$http({
							method : 'GET',
							url : 'http://localhost:5000/api/publication/' + id
						}).then(function mySuccess(response) {
							$("#Publication2").modal({backdrop: "static"});
							$scope.Publication = response.data;
						}, function myError(response) {
							$scope.myWelcome = "Something went wrong";
						});
			};
			// save the edit and send the changes to server
			$scope.update_Publication = function(){
				console.log($scope.Publication._id);// this put put the Publication id to the console 
						$http({
							method : 'PUT',
							url : 'http://localhost:5000/api/publication/' + $scope.Publication._id, 
							data: $scope.Publication
						}).then(function mySuccess(response) {
							Refresh_Publication();
							SuccessMsg("The Publication was updated!"); // showing the message 
							$scope.Publication = response.data;
						}, function myError(response) {
							console.log("Something went wrong");
							console.log($scope.Publication);
						});
			};
			//-------------------------
		// End of the whole process of *Update* a new Publication		
	
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// END OF Publication PAGE //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

});