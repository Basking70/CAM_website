'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:ResearchCtrl
 * @description
 * # ResearchCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('ResearchCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
$(document).ready(function(){
  $("#demo").on("hide.bs.collapse", function(){
    $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Read More');
  });
  $("#demo").on("show.bs.collapse", function(){
    $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Read Less');
  });
});
	
	
  });
