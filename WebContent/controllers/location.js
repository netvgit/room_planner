/**
 * Add, Remove and Edit location.
 * @description This is angular controller for managing locations.
 * @class mrp_app.mrpApp.ManageLocationsController
 */
mrpApp.controller('ManageLocationsController', function($rootScope, $scope) {
    // Get data
    $scope.locationsList = locationsJSON;

    // Changes main content heading
    $rootScope.MainHeading = "Manage Locations";

    // Selected locations from table for deletion
    $scope.selected = {};
    $scope.selected.locationsList = [];

    /**
     * @name $scope.addLocation
     * @function addLocation
     * @memberOf mrp_app.mrpApp.ManageLocationsController
     * @description To show modal with form and form will be filled with selected Location details or empty if new Location
     * @param selectedLocation {Object} Location JSON
     */
    $scope.addLocation = function(selectedLocation) {
        // Data for modal
        $scope.modal = {};

        // Icon for modal to add new location
        $scope.modal.icon = "glyphicon-plus";

        // Heading for modal to add new location
        $scope.modal.heading = "Add Location";

        // Empty Location
        $scope.location = {};

        // If location selected
        if (selectedLocation) {
            // Location for edit
            $scope.location = selectedLocation;

            console.log(selectedLocation);

            // Icon for modal to edit selected location
            $scope.modal.icon = "glyphicon-edit";

            // Heading for modal to edit selected location
            $scope.modal.heading = "Edit Location";
        }

        // Show modal
        $jQ('#addLocationModal').modal('show');
    };

    /**
     * @name $scope.submitLocation
     * @function submitLocation
     * @memberOf mrp_app.mrpApp.ManageLocationsController
     * @description Save edited or newly added location in DB/JSON array
     * @param isValid {boolean} form validation
     */
    $scope.submitLocation = function(isValid) {
        console.log(isValid);

        // Serialize location form
        var newLocation = AppOperations.serializeForm('#addLocationForm');
        console.log(newLocation);

        /*// check to make sure the form is completely valid
		if (!isValid) {
			alert("Fill proper details.");
			return;
		}*/

        // Hide modal
        $jQ('#addLocationModal').modal('hide');

        // Remove backdrop of modal
        $jQ(".modal-backdrop").remove();

        // Reset form
        document.getElementById("addLocationForm").reset();

        // if location has id so update location
        if (newLocation.id) {
            AppOperations.updateLocation(newLocation);
        } else {
            // Assign new id to new Location
            newLocation.id = parseInt(locationsJSON[locationsJSON.length - 1].id) + 1;

            // Add new Location in Locations json array
            locationsJSON[locationsJSON.length] = newLocation;
        }
    };

    /**
     * @name $scope.checkAll
     * @function checkAll
     * @memberOf mrp_app.mrpApp.ManageLocationsController
     * @description Select all or deselect all checkboxes on location table for deletion.
     */
    $scope.checkAll = function() {
        // Get selectAll checked or not
        var selectAll = document.getElementById('check-all').checked;
        console.log(selectAll);

        // All are selected, add all ids in array
        if (selectAll)
            $scope.selected.locationsList = $scope.locationsList.map(function(item) {
                return item.id;
            });
        else
            $scope.selected.locationsList = []; // Nothing is selected 
    };

    /**
     * @name $scope.deleteLocations
     * @function deleteLocations
     * @memberOf mrp_app.mrpApp.ManageLocationsController
     * @description Delete selected locations
     */
    $scope.deleteLocations = function() {
        console.log($scope.selected.locationsList);
        console.log($scope.selected.locationsList.length);

        // hide modal from display
        $jQ("#confirmationModal").modal('hide');

        // remove modal backdrop from display
        $jQ(".modal-backdrop").remove();

        // If nothing to delete
        if ($scope.selected.locationsList.length == 0) {
            console.log("Nothing to delete");
            return;
        }

        // Delete selected locations and get updated json array
        $scope.locationsList = AppOperations.deleteLocations($scope.selected.locationsList);
    };
});