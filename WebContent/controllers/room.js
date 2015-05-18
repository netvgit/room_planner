// Displays available rooms in Grid view
 mrpApp.controller('AvailableRoomsController', function($rootScope, $scope,searchSlotService) {
     // Get data
     $scope.mrp = {};
     $scope.mrp.roomsList = roomsJSON;
     
     $scope.mrp.searchSlot = searchSlotService.dataObj;
     
     console.log($scope.mrp.searchSlot);
     
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
         
         // Assign start time
         slot.date = $scope.mrp.searchSlot.date;

         // Assign start time
         slot.start_time = $scope.mrp.searchSlot.startTime;

         // Assign end time
         slot.end_time = $scope.mrp.searchSlot.endTime;

         
         // Add new event in events json array
         slotsJSON[slotsJSON.length] = slot;
         
         // Show slot in slot detail view
         window.location = '#/slotdetail/' + slot.id;
     };
 });