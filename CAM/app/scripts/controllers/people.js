'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('PeopleCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	
	$(document).ready(function(){
    
	$("#myBtn1").click(function(){
        $("#myModal1").modal({backdrop: "static"});
    });
    });

	
  });
