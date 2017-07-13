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
	});
	
	
  });
