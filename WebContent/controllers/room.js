// Displays available rooms in Grid view
mrpApp.controller('AvailableRoomsController', function($rootScope, $scope,
		searchSlotService) {
	// Get data
	$scope.mrp = {};
	$scope.mrp.roomsList = roomsJSON;

	$scope.mrp.searchSlot = searchSlotService.dataObj;

	console.log($scope.mrp.searchSlot);

	// Changes main content heading
	$rootScope.MainHeading = "Available Rooms";

	// To show modal with form and form will be filled with selected room
	// details
	$scope.bookSlot = function(selectedRoomID) {
		var selectedRoom = AppOperations.getRoom(selectedRoomID);
		$scope.room = selectedRoom;

		console.log(selectedRoom);

		$jQ('#bookSlotModal').modal('show');
	};

	// After modifications or filling new details will save slot
	$scope.submitSlot = function(slot, room, isValid) {
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

mrpApp.controller('ManageRoomsController', function($rootScope, $scope,
		searchSlotService) {
	// Get data
	$scope.roomsList = roomsJSON;

	// Changes main content heading
	$rootScope.MainHeading = "Manage Rooms";

	// To show modal with form and form will be filled with selected room
	// details or empty if new room
	$scope.addRoom = function(selectedRoom) {

		// var selectedRoom = AppOperations.getRoom(selectedRoomID);

		$scope.modal = {};
		$scope.modal.icon = "glyphicon-plus";
		$scope.modal.heading = "Add Room";

		if (selectedRoom) {
			$scope.room = selectedRoom;

			console.log(selectedRoom);

			$scope.modal.icon = "glyphicon-edit";
			$scope.modal.heading = "Edit Room";
		}

		// Show modal
		$jQ('#addRoomModal').modal('show');
	};

	// After modifications or filling new details will save room
	$scope.submitRoom = function(isValid) {
		console.log(isValid);
				
		//var newRoom = JSON.stringify($jQ("#addRoomForm").serializeArray());
		
		var newRoom = $jQ('#addRoomForm').serializeArray();
		var newRoomObject = {};
		$jQ.each(newRoom,
		    function(i, v) {
			newRoomObject[v.name] = v.value;
		    });
		
		console.log(newRoomObject);

		/*// check to make sure the form is completely valid
		if (!isValid) {
			alert("Fill proper details.");
			return;
		}*/

		// Hide modal
		$jQ('#addRoomModal').modal('hide');

		$jQ(".modal-backdrop").remove();
		
		// Reset form
		document.getElementById("addRoomForm").reset();

		if (newRoomObject.id) {
			AppOperations.updateRoom(newRoomObject);
		} else {
			// Create new room json

			// Assign new id to new room
			newRoomObject.id = parseInt(roomsJSON[roomsJSON.length - 1].id) + 1;

			// Add new event in events json array
			roomsJSON[roomsJSON.length] = newRoomObject;
		}	
	};

	// Delete room
	$scope.deleteRooms = function(roomIds, isValid) {
	};
});