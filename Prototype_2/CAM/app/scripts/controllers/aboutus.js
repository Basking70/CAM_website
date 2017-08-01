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
	
	
function OpenNote(evt, title) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(title).style.display = "block";
    evt.currentTarget.className += " active";
}
	
	
	
  });
