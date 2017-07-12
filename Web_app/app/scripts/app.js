'use strict';

/**
 * @ngdoc overview
 * @name webAppApp
 * @description
 * # webAppApp
 *
 * Main module of the application.
 */
angular
  .module('webAppApp', [
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
      .when('/Research', {
        templateUrl: 'views/Research.html',
        controller: 'ResearchCtrl',
        controllerAs: 'Research'
      })
	  .when('/Seminars', {
        templateUrl: 'views/Seminars.html',
        controller: 'SeminarsCtrl',
        controllerAs: 'Seminars'
      })
      .when('/Equipment', {
        templateUrl: 'views/Equipment.html',
        controller: 'EquipmentCtrl',
        controllerAs: 'Equipment'
      })
      .when('/Publications', {
        templateUrl: 'views/Publications.html',
        controller: 'PublicationsCtrl',
        controllerAs: 'Publications'
      })
      .when('/AboutUs', {
        templateUrl: 'views/AboutUs.html',
        controller: 'AboutUsCtrl',
        controllerAs: 'AboutUs'
      })
      .when('/People', {
        templateUrl: 'views/People.html',
        controller: 'PeopleCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
