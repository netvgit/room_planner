mrpApp.controller('ManageFacilitiesController', function($rootScope, $scope) {
	// Get data
	$scope.facilitiesList = facilitiesJSON;

	// Changes main content heading
	$rootScope.MainHeading = "Manage Facilities";
	
	$scope.selected = {};
	$scope.selected.facilitiesList =[];

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

	$scope.checkAll = function() {		
		var selectAll = document.getElementById('check-all').checked;
		console.log(selectAll);
		if(selectAll)
			$scope.selected.facilitiesList = $scope.facilitiesList.map(function(item) { return item.id; });
		else
			$scope.selected.facilitiesList = [];		 
	  };
	
	// Delete users
	$scope.deleteFacilities = function() {
		console.log($scope.selected.facilitiesList);
		console.log($scope.selected.facilitiesList.length);
		
		// hide modal from display
        $jQ("#confirmationModal").modal('hide');

        // remove modal backdrop from display
        $jQ(".modal-backdrop").remove();
		
		if($scope.selected.facilitiesList.length == 0)
		  {
			console.log("Nothing to delete");
			return;									
		  }		
		
		$scope.facilitiesList = AppOperations.deleteFacilities($scope.selected.facilitiesList);
	};
});