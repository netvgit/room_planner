mrpApp.controller('ManageUsersController', function($rootScope, $scope) {
	// Get data
	$scope.userList = userJSON;
	$scope.userRoleList = userRoleJSON;

	// Changes main content heading
	$rootScope.MainHeading = "Manage Users";
	
	$scope.selected = {};
	$scope.selected.usersList =[];

	// To show modal with form and form will be filled with selected user
	// details or empty if new user
	$scope.addUser = function(selectedUser) {
		$scope.modal = {};
		$scope.modal.icon = "glyphicon-plus";
		$scope.modal.heading = "Add User";
		$scope.user = {};

		if (selectedUser) {
			$scope.user = selectedUser;

			console.log(selectedUser);

			$scope.modal.icon = "glyphicon-edit";
			$scope.modal.heading = "Edit User";
		}

		// Show modal
		$jQ('#addUserModal').modal('show');
		
		// Select user role in form
		$jQ("#role").val($scope.user.role);
	};

	// After modifications or filling new details will save user
	$scope.submitUser = function(isValid) {
		console.log(isValid);
		
		var newUser = $jQ('#addUserForm').serializeArray();
		var newUserObject = {};
		$jQ.each(newUser,
		    function(i, v) {
			newUserObject[v.name] = v.value;
		    });
		
		console.log(newUserObject);

		/*// check to make sure the form is completely valid
		if (!isValid) {
			alert("Fill proper details.");
			return;
		}*/

		// Hide modal
		$jQ('#addUserModal').modal('hide');

		$jQ(".modal-backdrop").remove();
		
		// Reset form
		document.getElementById("addUserForm").reset();

		if (newUserObject.id) {
			
			// If current user is updated so check email id and change that too
			if(user_id === $scope.user.email && $scope.user.email !== newUserObject.email)
				user_id =  newUserObject.email;				
			
			// Get notifications details
			newUserObject.notifications = $scope.user.notifications;
			
			//Update user
			AppOperations.updateUser(newUserObject);
		} else {
			// Create new user json

			// Assign new id to new user
			newUserObject.id = parseInt(userJSON[userJSON.length - 1].id) + 1;

			// Add new user in users json array
			userJSON[userJSON.length] = newUserObject;
		}	
	};

	$scope.checkAll = function() {		
		var selectAll = document.getElementById('check-all').checked;
		console.log(selectAll);
		if(selectAll)
			$scope.selected.usersList = $scope.userList.map(function(item) { return item.id; });
		else
			$scope.selected.usersList = [];		 
	  };
	
	// Delete users
	$scope.deleteUsers = function() {
		console.log($scope.selected.usersList);
		console.log($scope.selected.usersList.length);
		
		// hide modal from display
        $jQ("#confirmationModal").modal('hide');

        // remove modal backdrop from display
        $jQ(".modal-backdrop").remove();
		
		if($scope.selected.usersList.length == 0)
		  {
			console.log("Nothing to delete");
			return;									
		  }		
		
		$scope.userList = AppOperations.deleteUsers($scope.selected.usersList);
	};
});