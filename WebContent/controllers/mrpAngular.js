/**
 * Manages all user, room, location, facilities and calendar and booking slot.
 * @description This is angular app for all functionality after login.
 * @class mrp_app.mrpApp
 * @memberOf mrp_app    
 * @author farah
 */  
var mrpApp = angular.module("mrpApp", ['checklist-model', 'ui.calendar', 'ui.bootstrap', 'ngRoute']);

/**
 * All routes sets here.
 */
 mrpApp.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
         when('/availablerooms', {
             templateUrl: 'tpl/available-rooms.html',
             controller: 'AvailableRoomsController'
         }).
         when('/slotdetail/:slotId', {
             templateUrl: 'tpl/slot-detail.html',
             controller: 'SlotDetailController'
         }).
         when('/searchrooms', {
             templateUrl: 'tpl/search-rooms.html',
             controller: 'SearchRoomsController'
         }).
         when('/profile', {
             templateUrl: 'tpl/profile.html',
             controller: 'ProfileController'
         }).
         when('/calendarview', {
             templateUrl: 'tpl/calendar-view.html',
             controller: 'CalendarViewController'
         }).
         when('/managerooms', {
             templateUrl: 'tpl/room.html',
             controller: 'ManageRoomsController'
         }).
         when('/manageusers', {
             templateUrl: 'tpl/user.html',
             controller: 'ManageUsersController'
         }).
         when('/managelocations', {
             templateUrl: 'tpl/location.html',
             controller: 'ManageLocationsController'
         }).
         when('/managefacilities', {
             templateUrl: 'tpl/facility.html',
             controller: 'ManageFacilitiesController'
         }).
         otherwise({
             redirectTo: '/searchrooms'
         });
     }
 ]);

 /** 
  * @function run
  * @memberOf mrp_app.mrpApp
  * @description Init function of app. will set default values and tick a second in date.
  */
 mrpApp.run(function($rootScope, $interval) {
 	 // 'Date' on home page in nav bar
     $rootScope.AssignedDate = Date; 
     
     // Heading of main content
     $rootScope.MainHeading = "MR Planner"; 

     $interval(function() {
         // nothing is required here, interval triggers digest automaticaly
     }, 1000)
 });

 /**
  * Use to share data among two controllers like SearchRoomsController and AvailableRoomsController.
  * @function searchSlotService
  * @memberOf mrp_app.mrpApp
  * @description This is an angularjs service.
  */
 mrpApp.factory('searchSlotService', function() {
     var _dataObj = {};
     return {
         dataObj: _dataObj
     };
 });

 /**
  * @function calendarService
  * @memberOf mrp_app.mrpApp
  * @description This is an angularjs service.
  */
 mrpApp.factory('calendarService', function() {
     var _dateObj = {};
     return {
         dateObj: _dateObj
     };
 });

 /**
  * Global action like add clock, display profile name etc.
  * @description This is angular controller for displaying some global data of user.
  * @class mrp_app.mrpApp.MRPController
  */
 mrpApp.controller('MRPController', function($rootScope, $scope) {
     $scope.mrp = {};
     $scope.mrp.userId = user_id;

     // Changes main content heading
     $rootScope.MainHeading = "Search Room";
 });