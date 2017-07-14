'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:AboutusCtrl
 * @description
 * # AboutusCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('AboutusCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	/// the first 	
	$(document).ready(function(){
    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    	});
	//// the secound
	    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    	});
	//// the third
		$("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
    	});
	//// the forth
		$("#flip4").click(function(){
        $("#panel4").slideToggle("slow");
    	});
	//// the fifth
		$("#flip5").click(function(){
        $("#panel5").slideToggle("slow");
    	});
	//// the sith
		$("#flip6").click(function(){
        $("#panel6").slideToggle("slow");
    	});
	//// the seveth
		$("#flip7").click(function(){
        $("#panel7").slideToggle("slow");
    	});

		$('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
		}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
		});
		
		
		
		
		
	});
  });
