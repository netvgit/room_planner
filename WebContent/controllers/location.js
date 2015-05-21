mrpApp.controller('ManageLocationsController', function($rootScope, $scope) {
	// Get data
	$scope.locationsList = locationsJSON;

	// Changes main content heading
	$rootScope.MainHeading = "Manage Locations";

	// To show modal with form and form will be filled with selected Location
	// details or empty if new Location
	$scope.addLocation = function(selectedLocation) {
		$scope.modal = {};
		$scope.modal.icon = "glyphicon-plus";
		$scope.modal.heading = "Add Location";
		$scope.location = {};
		
		if (selectedLocation) {
			$scope.location = selectedLocation;

			console.log(selectedLocation);

			$scope.modal.icon = "glyphicon-edit";
			$scope.modal.heading = "Edit Location";
		}

		// Show modal
		$jQ('#addLocationModal').modal('show');
	};

	// After modifications or filling new details will save Location
	$scope.submitLocation = function(isValid) {
		console.log(isValid);
	
		var newLocation = $jQ('#addLocationForm').serializeArray();
		var newLocationObject = {};
		$jQ.each(newLocation,
		    function(i, v) {
			newLocationObject[v.name] = v.value;
		    });
		
		console.log(newLocationObject);

		/*// check to make sure the form is completely valid
		if (!isValid) {
			alert("Fill proper details.");
			return;
		}*/

		// Hide modal
		$jQ('#addLocationModal').modal('hide');

		$jQ(".modal-backdrop").remove();
		
		// Reset form
		document.getElementById("addLocationForm").reset();

		if (newLocationObject.id) {
			AppOperations.updateLocation(newLocationObject);
		} else {
			// Create new Location json

			// Assign new id to new Location
			newLocationObject.id = parseInt(locationsJSON[locationsJSON.length - 1].id) + 1;

			// Add new Location in Locations json array
			locationsJSON[locationsJSON.length] = newLocationObject;
		}	
	};

	// Delete Location
	$scope.deleteLocations = function(locationIds, isValid) {
	};
});