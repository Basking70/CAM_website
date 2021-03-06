'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:EquipmentCtrl
 * @description
 * # EquipmentCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('EquipmentCtrl', function ($http,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// fetch and show the data in to equipment PAGE ////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
	
	// get data from db and show it to the table
				$http({
					method : "GET",
					url : "http://localhost:5000/api/equipment",
				}).then(function mySuccess(response) {
					console.log("I got the data for Equipment pgae I requested");
					$scope.EquipmentData = response.data;
				}, function myError(response) {
					$scope.myWelcome = "Something went wrong";
				});	
	
	// filter just for Robot section 
		$scope.Equipment_Robot_Filter = function(item) {
		  return (item.Group == 'Robots');
		};

	// filter just for 3D Printers section 
		$scope.Equipment_3DPrinters_Filter = function(item) {
		  return (item.Group == '3D_Printers');
		};
	
	// filter just for CNC Machines section 
		$scope.Equipment_CNCMachines_Filter = function(item) {
		  return (item.Group == 'CNC_Machines');
		};

	// filter just for Molding/ Forming section
		$scope.Equipment_Molding_Filter = function(item) {
		  return (item.Group == 'Molding_Forming');
		};

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
		
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////// show te pop up window equipment PAGE -- need to be fixed ////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////	

	$(document).ready(function(){
  
		$("#myBtn1").click(function(){
			$("#myModal1").modal({backdrop: "static"});
		});
		$("#myBtn2").click(function(){
			$("#myModal2").modal({backdrop: "static"});
		});	
		$("#myBtn3").click(function(){
			$("#myModal3").modal({backdrop: "static"});
		});
		$("#myBtn4").click(function(){
			$("#myModal4").modal({backdrop: "static"});
		});
		$("#myBtn5").click(function(){
			$("#myModal5").modal({backdrop: "static"});
		});
		$("#myBtn6").click(function(){
			$("#myModal6").modal({backdrop: "static"});
		});
		$("#myBtn7").click(function(){
			$("#myModal7").modal({backdrop: "static"});
		});
		$("#myBtn8").click(function(){
			$("#myModal8").modal({backdrop: "static"});
		});
		$("#myBtn9").click(function(){
			$("#myModal9").modal({backdrop: "static"});
		});
		$("#myBtn10").click(function(){
			$("#myModal10").modal({backdrop: "static"});
		});
		$("#myBtn11").click(function(){
			$("#myModal11").modal({backdrop: "static"});
		});
		$("#myBtn12").click(function(){
			$("#myModal12").modal({backdrop: "static"});
		});
		$("#myBtn13").click(function(){
			$("#myModal13").modal({backdrop: "static"});
		});
		$("#myBtn14").click(function(){
			$("#myModal14").modal({backdrop: "static"});
		});
		$("#myBtn15").click(function(){
			$("#myModal15").modal({backdrop: "static"});
		});
		$("#myBtn16").click(function(){
			$("#myModal16").modal({backdrop: "static"});
		});
		$("#myBtn17").click(function(){
			$("#myModal17").modal({backdrop: "static"});
		});
		$("#myBtn18").click(function(){
			$("#myModal18").modal({backdrop: "static"});
		});
		$("#myBtn19").click(function(){
			$("#myModal19").modal({backdrop: "static"});
		});
		$("#myBtn20").click(function(){
			$("#myModal20").modal({backdrop: "static"});
		});
		$("#myBtn21").click(function(){
			$("#myModal21").modal({backdrop: "static"});
		});
		$("#myBtn22").click(function(){
			$("#myModal22").modal({backdrop: "static"});
		});
	});

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
		
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
///////////////////  ////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////	
	
	/* i dont know what is it
	$(document).ready(function(){
    	$("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    	});
		$("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    	});
	});*/
	
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
		
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////// routeting pictures in equipment PAGE ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////		
	
	$(document).ready(function () {
		$('.carousel').carousel({
			interval:2000
		});

		$('.carousel').carousel('cycle');
	});
	
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
		
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////// Addressing to diffrent section in equipment PAGE ////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////	
	
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------	
	
 });
