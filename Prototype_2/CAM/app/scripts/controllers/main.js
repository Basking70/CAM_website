'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	
	$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    });

    $('.carousel').carousel('cycle');
});
	
  });
