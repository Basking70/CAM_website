
'use strict';

/**
 * @ngdoc function
 * @name camApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the camApp
 */
angular.module('camApp')
  .controller('GalleryCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	baguetteBox.run('.tz-gallery');
});
