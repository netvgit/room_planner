 var mrpApp = angular.module("mrpApp", ['ngRoute']);

 mrpApp.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
         when('/availablerooms', {
             templateUrl: 'availableroomsView.htm',
             controller: 'AvailableRoomsViewController'
         }).
         when('/slotDetailView/:slotId', {
             templateUrl: 'slotDetailView.htm',
             controller: 'SlotDetailViewController'
         }).
         when('/searchRoomsView', {
             templateUrl: 'searchRoomsView.htm',
             controller: 'SearchRoomsViewController'
         }).
         otherwise({
             redirectTo: '/searchRoomsView'
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

 // Displays available rooms in Grid view
 mrpApp.controller('AvailableRoomsViewController', function($rootScope, $scope) {
     // Get data
     $scope.mrp = {};
     $scope.mrp.roomsList = roomsJSON;
     
     // Changes main content heading
     $rootScope.MainHeading = "Available Rooms";
     
     // To show modal with form and form will be filled with selected room details
     $scope.bookSlot = function(selectedRoomID) {
    	 var selectedRoom = AppOperations.getRoom(selectedRoomID);
    	 $scope.room = selectedRoom;
    	
    	 console.log(selectedRoom);
    	 
    	 $jQ('#bookSlotModal').modal('show');
     };
     
     // After modifications or filling new details will save slot
     $scope.submitSlot = function(slot,room, isValid) {
         console.log(slot);
         console.log(isValid);
         console.log(room);        
         
         // check to make sure the form is completely valid
         if (!isValid) {
             alert("Fill proper details.");
             return;
         }

         $jQ('#bookSlotModal').modal('hide');
         
         $jQ(".modal-backdrop").remove();
         
         // Create new slot json
     
         // Assign new id to new event
         slot.id = parseInt(slotsJSON[slotsJSON.length - 1].id) + 1;
         
         // Assign room id
         slot.room_id = room.id;

         // Assign owner id
         slot.owner_id = user_id;

         // Add new event in events json array
         slotsJSON[slotsJSON.length] = slot;
         
         // Show slot in slot detail view
         window.location = '#/slotDetailView/' + slot.id;
     };
 });

 
//Displays single selected slot in slot detail view
 mrpApp.controller('SlotDetailViewController', function($rootScope, $scope, $location, $routeParams) {
     // Gets id of slot from route
     $scope.slotId = $routeParams.slotId;

     // Gets slot from slots json array by id
     $scope.slot = AppOperations.getSlot($scope.slotId);
     
     // Gets room1 from rooms json array by id
     $scope.room = AppOperations.getRoom($scope.slot.room_id);

     // Changes main content heading
     $rootScope.MainHeading = "Meeting";
 });
 
 
//Displays search landing page
 mrpApp.controller('SearchRoomsViewController', function($rootScope, $scope, $location, $routeParams) {
     // Changes main content heading
     $rootScope.MainHeading = "Search Room";
 });