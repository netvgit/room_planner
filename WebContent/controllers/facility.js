/**
 * Add, Remove and Edit facility.
 * @description This is angular controller for managing facilities.
 * @class mrp_app.mrpApp.ManageFacilitiesController
 */
mrpApp.controller('ManageFacilitiesController', function($rootScope, $scope) {
    // Get data
    $scope.facilitiesList = facilitiesJSON;

    // Changes main content heading
    $rootScope.MainHeading = "Manage Facilities";

    // Selected facilities from table for deletion
    $scope.selected = {};
    $scope.selected.facilitiesList = [];

    /**
     * @name $scope.addFacility
     * @function addFacility
     * @memberOf mrp_app.mrpApp.ManageFacilitiesController
     * @description To show modal with form and form will be filled with selected Facility details or empty if new Facility
     * @param selectedFacility {Object} Facility JSON
     */
    $scope.addFacility = function(selectedFacility) {
        // Data for modal
        $scope.modal = {};

        // Icon for modal to add new facility
        $scope.modal.icon = "glyphicon-plus";

        // Heading for modal to add new facility
        $scope.modal.heading = "Add Facility";

        // Empty Facility
        $scope.facility = {};

        // If facility selected
        if (selectedFacility) {
            // Facility for edit
            $scope.facility = selectedFacility;

            console.log(selectedFacility);

            // Icon for modal to edit selected facility
            $scope.modal.icon = "glyphicon-edit";

            // Heading for modal to edit selected facility
            $scope.modal.heading = "Edit Facility";
        }

        // Show modal
        $jQ('#addFacilityModal').modal('show');
    };

    /**
     * @name $scope.submitFacility
     * @function submitFacility
     * @memberOf mrp_app.mrpApp.ManageFacilitiesController
     * @description Save edited or newly added facility in DB/JSON array
     * @param isValid {boolean} form validation
     */
    $scope.submitFacility = function(isValid) {
        console.log(isValid);

        // Serialize facility form
        var newFacility = AppOperations.serializeForm('#addFacilityForm');
        console.log(newFacility);

        /*// check to make sure the form is completely valid
		if (!isValid) {
			alert("Fill proper details.");
			return;
		}*/

        // Hide modal
        $jQ('#addFacilityModal').modal('hide');

        // Remove backdrop of modal
        $jQ(".modal-backdrop").remove();

        // Reset form
        document.getElementById("addFacilityForm").reset();

        // if facility has id so update facility
        if (newFacility.id) {
            AppOperations.updateFacility(newFacility);
        } else {
            // Assign new id to new Facility
            newFacility.id = parseInt(facilitiesJSON[facilitiesJSON.length - 1].id) + 1;

            // Add new Facility in Facilities json array
            facilitiesJSON[facilitiesJSON.length] = newFacility;
        }
    };

    /**
     * @name $scope.checkAll
     * @function checkAll
     * @memberOf mrp_app.mrpApp.ManageFacilitiesController
     * @description Select all or deselect all checkboxes on facility table for deletion.
     */
    $scope.checkAll = function() {
        // Get selectAll checked or not
        var selectAll = document.getElementById('check-all').checked;
        console.log(selectAll);

        // All are selected, add all ids in array
        if (selectAll)
            $scope.selected.facilitiesList = $scope.facilitiesList.map(function(item) {
                return item.id;
            });
        else
            $scope.selected.facilitiesList = []; // Nothing is selected
    };

    /**
     * @name $scope.deleteFacilities
     * @function deleteFacilities
     * @memberOf mrp_app.mrpApp.ManageFacilitiesController
     * @description Delete selected facilities
     */
    $scope.deleteFacilities = function() {
        console.log($scope.selected.facilitiesList);
        console.log($scope.selected.facilitiesList.length);

        // hide modal from display
        $jQ("#confirmationModal").modal('hide');

        // remove modal backdrop from display
        $jQ(".modal-backdrop").remove();

        // If nothing to delete
        if ($scope.selected.facilitiesList.length == 0) {
            console.log("Nothing to delete");
            return;
        }

        // Delete selected facilities and get updated json array
        $scope.facilitiesList = AppOperations.deleteFacilities($scope.selected.facilitiesList);
    };
});