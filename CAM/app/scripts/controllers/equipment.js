'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:EquipmentCtrl
 * @description
 * # EquipmentCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('EquipmentCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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
	});
	
	$(document).ready(function(){
    	$("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    	});
		$("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    	});
	});
  });
