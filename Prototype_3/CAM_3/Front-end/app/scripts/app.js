'use strict';

/**
 * @ngdoc overview
 * @name camApp
 * @description
 * # camApp
 *
 * Main module of the application.
 */
angular
  .module('camApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
	
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl',
        controllerAs: 'research'
      })
      .when('/seminars', {
        templateUrl: 'views/seminars.html',
        controller: 'SeminarsCtrl',
        controllerAs: 'seminars'
      })
      .when('/equipment', {
        templateUrl: 'views/equipment.html',
        controller: 'EquipmentCtrl',
        controllerAs: 'equipment'
      })
      .when('/publications', {
        templateUrl: 'views/publications.html',
        controller: 'PublicationsCtrl',
        controllerAs: 'publications'
      })	
      .when('/aboutus', {
        templateUrl: 'views/aboutus.html',
        controller: 'AboutusCtrl',
        controllerAs: 'aboutus'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/vkjvkjk646jfdkjjdgvsldkjvbsjhv2423JSDGVSKJDVJSD7527235632MXHBVKDJVKSDJV', {
        templateUrl: 'views/vkjvkjk646jfdkjjdgvsldkjvbsjhv2423JSDGVSKJDVJSD7527235632MXHBVKDJVKSDJV.html',
        controller: 'vkjvkjk646jfdkjjdgvsldkjvbsjhv2423JSDGVSKJDVJSD7527235632MXHBVKDJVKSDJVCtrl',
        controllerAs: 'vkjvkjk646jfdkjjdgvsldkjvbsjhv2423JSDGVSKJDVJSD7527235632MXHBVKDJVKSDJV'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
