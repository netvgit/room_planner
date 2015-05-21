mrpApp.controller('ManageFacilitiesController', function($rootScope, $scope) {
	// Get data
	$scope.facilitiesList = facilitiesJSON;

	// Changes main content heading
	$rootScope.MainHeading = "Manage Facilities";

	// To show modal with form and form will be filled with selected Facility
	// details or empty if new Facility
	$scope.addFacility = function(selectedFacility) {
		$scope.modal = {};
		$scope.modal.icon = "glyphicon-plus";
		$scope.modal.heading = "Add Facility";
		$scope.facility = {};

		if (selectedFacility) {
			$scope.facility = selectedFacility;

			console.log(selectedFacility);

			$scope.modal.icon = "glyphicon-edit";
			$scope.modal.heading = "Edit Facility";
		}

		// Show modal
		$jQ('#addFacilityModal').modal('show');
	};

	// After modifications or filling new details will save Facility
	$scope.submitFacility = function(isValid) {
		console.log(isValid);
		
		var newFacility = $jQ('#addFacilityForm').serializeArray();
		var newFacilityObject = {};
		$jQ.each(newFacility,
		    function(i, v) {
			newFacilityObject[v.name] = v.value;
		    });
		
		console.log(newFacilityObject);

		/*// check to make sure the form is completely valid
		if (!isValid) {
			alert("Fill proper details.");
			return;
		}*/

		// Hide modal
		$jQ('#addFacilityModal').modal('hide');

		$jQ(".modal-backdrop").remove();
		
		// Reset form
		document.getElementById("addFacilityForm").reset();

		if (newFacilityObject.id) {
			AppOperations.updateFacility(newFacilityObject);
		} else {
			// Create new Facility json

			// Assign new id to new Facility
			newFacilityObject.id = parseInt(facilitiesJSON[facilitiesJSON.length - 1].id) + 1;

			// Add new Facility in Facilities json array
			facilitiesJSON[facilitiesJSON.length] = newFacilityObject;
		}	
	};

	// Delete Facility
	$scope.deleteFacilities = function(facilityIds, isValid) {
	};
});