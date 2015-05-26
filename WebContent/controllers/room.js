/**
 * Add new slot and display available rooms as per search.
 * @description This is angular controller for displaying available rooms in Grid view.
 * @class mrp_app.mrpApp.AvailableRoomsController
 * @param searchSlotService {factory} details for query 
 */
mrpApp.controller('AvailableRoomsController', function($rootScope, $scope,
    searchSlotService) {
    // Get data
    $scope.mrp = {};

    // Get room json array
    $scope.mrp.roomsList = roomsJSON;

    // Get query details from factory data
    $scope.mrp.searchSlot = searchSlotService.dataObj;

    console.log($scope.mrp.searchSlot);

    // Changes main content heading
    $rootScope.MainHeading = "Available Rooms";

    /**
     * @name $scope.bookSlot
     * @function bookSlot
     * @memberOf mrp_app.mrpApp.AvailableRoomsController
     * @description To show modal with form and form will be filled with selected room details
     * @param selectedRoomID {Number} selected Room ID
     */
    $scope.bookSlot = function(selectedRoomID) {
        // Get room object on ID
        var selectedRoom = AppOperations.getRoom(selectedRoomID);

        // Selected room to scope
        $scope.room = selectedRoom;

        console.log(selectedRoom);

        // Show modal
        $jQ('#bookSlotModal').modal('show');
    };

    /**
     * @name $scope.submitSlot
     * @function submitSlot
     * @memberOf mrp_app.mrpApp.AvailableRoomsController
     * @description After modifications or filling new details will save slot
     * @param slot {Object} slot details
     * @param room {Object} room details
     * @param isValid {boolean} form validation
     */
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

        // Assign date
        slot.date = $scope.mrp.searchSlot.date;

        // Assign start time
        slot.start = $scope.mrp.searchSlot.startTime;

        // Assign end time
        slot.end = $scope.mrp.searchSlot.endTime;

        // Add new event in events json array
        slotsJSON[slotsJSON.length] = slot;

        // Show slot in slot detail view
        window.location = '#/slotdetail/' + slot.id;
    };
});

/**
 * Add, Remove and Edit room.
 * @description This is angular controller for managing rooms.
 * @class mrp_app.mrpApp.ManageRoomsController
 */
mrpApp.controller('ManageRoomsController', function($rootScope, $scope) {
    // Get data
    $scope.roomsList = roomsJSON;

    // Changes main content heading
    $rootScope.MainHeading = "Manage Rooms";

    // Selected rooms from table for deletion
    $scope.selected = {};
    $scope.selected.roomsList = [];

    /**
     * @name $scope.addRoom
     * @function addRoom
     * @memberOf mrp_app.mrpApp.ManageRoomsController
     * @description To show modal with form and form will be filled with selected Room details or empty if new Room
     * @param selectedRoom {Object} Room JSON
     */
    $scope.addRoom = function(selectedRoom) {
        // Data for modal
        $scope.modal = {};

        // Icon for modal to add new room
        $scope.modal.icon = "glyphicon-plus";

        // Heading for modal to add new room
        $scope.modal.heading = "Add Room";

        // Empty Room
        $scope.room = {};

        // If room selected
        if (selectedRoom) {
            // Room for edit
            $scope.room = selectedRoom;

            console.log(selectedRoom);

            // Icon for modal to edit selected room
            $scope.modal.icon = "glyphicon-edit";

            // Heading for modal to edit selected room
            $scope.modal.heading = "Edit Room";
        }

        // Show modal
        $jQ('#addRoomModal').modal('show');
    };

    /**
     * @name $scope.submitRoom
     * @function submitRoom
     * @memberOf mrp_app.mrpApp.ManageRoomsController
     * @description Save edited or newly added room in DB/JSON array
     * @param isValid {boolean} form validation
     */
    $scope.submitRoom = function(isValid) {
        console.log(isValid);

        // Serialize room form		
        var newRoom = AppOperations.serializeForm('#addRoomForm');
        console.log(newRoom);

        /*// check to make sure the form is completely valid
		if (!isValid) {
			alert("Fill proper details.");
			return;
		}*/

        // Hide modal
        $jQ('#addRoomModal').modal('hide');

        // Remove backdrop of modal
        $jQ(".modal-backdrop").remove();

        // Reset form
        document.getElementById("addRoomForm").reset();

        // if room has id so update room
        if (newRoom.id) {
            AppOperations.updateRoom(newRoom);
        } else {
            // Assign new id to new room
            newRoom.id = parseInt(roomsJSON[roomsJSON.length - 1].id) + 1;

            // Add new room in rooms json array
            roomsJSON[roomsJSON.length] = newRoom;
        }
    };

    /**
     * @name $scope.checkAll
     * @function checkAll
     * @memberOf mrp_app.mrpApp.ManageRoomsController
     * @description Select all or deselect all checkboxes on room table for deletion.
     */
    $scope.checkAll = function() {
        // Get selectAll checked or not
        var selectAll = document.getElementById('check-all').checked;
        console.log(selectAll);

        // All are selected, add all ids in array
        if (selectAll)
            $scope.selected.roomsList = $scope.roomsList.map(function(item) {
                return item.id;
            });
        else
            $scope.selected.roomsList = []; // Nothing is selected
    };

    /**
     * @name $scope.deleteRooms
     * @function deleteRooms
     * @memberOf mrp_app.mrpApp.ManageRoomsController
     * @description Delete selected rooms
     */
    $scope.deleteRooms = function() {
        console.log($scope.selected.roomsList);
        console.log($scope.selected.roomsList.length);

        // hide modal from display
        $jQ("#confirmationModal").modal('hide');

        // remove modal backdrop from display
        $jQ(".modal-backdrop").remove();

        // If nothing to delete
        if ($scope.selected.roomsList.length == 0) {
            console.log("Nothing to delete");
            return;
        }

        // Delete selected rooms and get updated json array
        $scope.roomsList = AppOperations.deleteRooms($scope.selected.roomsList);
    };
});