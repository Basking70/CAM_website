'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('UserCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	function openPage(evt, page) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(page).style.display = "block";
    evt.currentTarget.className += " active";
	}	

	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();
	
  });
