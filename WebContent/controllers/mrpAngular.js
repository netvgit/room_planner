 var mrpApp = angular.module("mrpApp", ['ui.calendar','ui.bootstrap','ngRoute']);

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
 
 mrpApp.run(function($rootScope, $interval) {
     $rootScope.AssignedDate = Date; // 'Date' on home page in nav bar
     $rootScope.MainHeading = "MR Planner"; // Heading of main content

     $interval(function() {
         // nothing is required here, interval triggers digest automaticaly
     }, 1000)
 });
 
 mrpApp.factory('searchSlotService', function() {
	  var _dataObj = {};
	  return {
	    dataObj: _dataObj
	  };
});
 
 mrpApp.factory('calendarService',function(){
	    var _dateObj={};
	    return {
	        dateObj: _dateObj
	    };
});

 // Global action like add event, display profile name
 mrpApp.controller('MRPController', function($rootScope, $scope) {
     $scope.mrp = {};
     $scope.mrp.userId = user_id;
     $scope.mrp.roomsList = roomsJSON;

     // Changes main content heading
     $rootScope.MainHeading = "Available Rooms";
 });