/**
 * Add, Remove and Edit user.
 * @description This is angular controller for managing users.
 * @class mrp_app.mrpApp.ManageUsersController
 */
mrpApp.controller('ManageUsersController', function($rootScope, $scope) {
    // Get data
    $scope.userList = userJSON;
    $scope.userRoleList = userRoleJSON;

    // Changes main content heading
    $rootScope.MainHeading = "Manage Users";

    // Selected users from table for deletion
    $scope.selected = {};
    $scope.selected.usersList = [];

    /**
     * @name $scope.addUser
     * @function addUser
     * @memberOf mrp_app.mrpApp.ManageUsersController
     * @description To show modal with form and form will be filled with selected User details or empty if new User
     * @param selectedUser {Object} User JSON
     */
    $scope.addUser = function(selectedUser) {
        // Data for modal
        $scope.modal = {};

        // Icon for modal to add new user
        $scope.modal.icon = "glyphicon-plus";

        // Heading for modal to add new user
        $scope.modal.heading = "Add User";

        // Empty User
        $scope.user = {};

        // If user selected
        if (selectedUser) {
            // User for edit
            $scope.user = selectedUser;

            console.log(selectedUser);

            // Icon for modal to edit selected user
            $scope.modal.icon = "glyphicon-edit";

            // Heading for modal to edit selected user
            $scope.modal.heading = "Edit User";
        }

        // Show modal
        $jQ('#addUserModal').modal('show');

        // Select user role in form
        $jQ("#role").val($scope.user.role);
    };

    /**
     * @name $scope.submitUser
     * @function submitUser
     * @memberOf mrp_app.mrpApp.ManageUsersController
     * @description Save edited or newly added user in DB/JSON array
     * @param isValid {boolean} form validation
     */
    $scope.submitUser = function(isValid) {
        console.log(isValid);

        // Serialize user form
        var newUser = AppOperations.serializeForm('#addUserForm');
        console.log(newUser);

        /*// check to make sure the form is completely valid
		if (!isValid) {
			alert("Fill proper details.");
			return;
		}*/

        // Hide modal
        $jQ('#addUserModal').modal('hide');

        // Remove backdrop of modal
        $jQ(".modal-backdrop").remove();

        // Reset form
        document.getElementById("addUserForm").reset();

        // if user has id so update user
        if (newUser.id) {
            // If current user is updated so check email id and change that too
            if (user_id === $scope.user.email && $scope.user.email !== newUser.email)
                user_id = newUser.email;

            // Get notifications details
            newUser.notifications = $scope.user.notifications;

            //Update user
            AppOperations.updateUser(newUser);
        } else {
            // Assign new id to new user
            newUser.id = parseInt(userJSON[userJSON.length - 1].id) + 1;

            // Add new user in users json array
            userJSON[userJSON.length] = newUser;
        }
    };

    /**
     * @name $scope.checkAll
     * @function checkAll
     * @memberOf mrp_app.mrpApp.ManageUsersController
     * @description Select all or deselect all checkboxes on user table for deletion.
     */
    $scope.checkAll = function() {
        // Get selectAll checked or not
        var selectAll = document.getElementById('check-all').checked;
        console.log(selectAll);

        // All are selected, add all ids in array
        if (selectAll)
            $scope.selected.usersList = $scope.userList.map(function(item) {
                return item.id;
            });
        else
            $scope.selected.usersList = []; // Nothing is selected
    };

    /**
     * @name $scope.deleteUsers
     * @function deleteUsers
     * @memberOf mrp_app.mrpApp.ManageUsersController
     * @description Delete selected users
     */
    $scope.deleteUsers = function() {
        console.log($scope.selected.usersList);
        console.log($scope.selected.usersList.length);

        // hide modal from display
        $jQ("#confirmationModal").modal('hide');

        // remove modal backdrop from display
        $jQ(".modal-backdrop").remove();

        // If nothing to delete
        if ($scope.selected.usersList.length == 0) {
            console.log("Nothing to delete");
            return;
        }

        // Delete selected users and get updated json array
        $scope.userList = AppOperations.deleteUsers($scope.selected.usersList);
    };
});