 var mrpApp = angular.module("mrpApp", ['ngRoute']);

 mrpApp.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
         when('/availablerooms', {
             templateUrl: 'availableroomsView.htm',
             controller: 'AvailableRoomsViewController'
         }).
         otherwise({
             redirectTo: '/availablerooms'
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

 // Global action like add event, display profile name
 mrpApp.controller('MRPController', function($rootScope, $scope) {
     $scope.mrp = {};
     $scope.mrp.userId = user_id;
     $scope.mrp.roomsList = roomsJSON;

     // Changes main content heading
     $rootScope.MainHeading = "Available Rooms";
 });

 // Displays events in Grid view
 mrpApp.controller('AvailableRoomsViewController', function($rootScope, $scope) {
     // Get data
     $scope.mrp = {};
     $scope.mrp.roomsList = roomsJSON;
 });
