/**
 * Displays and manage logged in user's profile
 * @description This is angular controller who Displays and manage logged in user's profile.
 * @class mrp_app.mrpApp.ProfileController
 */
mrpApp.controller('ProfileController', function($rootScope, $scope) {
    // Changes main content heading
    $rootScope.MainHeading = "My profile";

    // Active first tab
    $jQ('#profileTab a:first').tab('show');

    // Get current user
    $scope.user = AppOperations.getCurrentUser();

    // On cancel it will take user to home
    $scope.goToHome = function() {
        window.location = '#/searchrooms';
    };

    /**
     * @name $scope.submitUser
     * @function submitUser
     * @memberOf mrp_app.mrpApp.ProfileController
     * @description Save user with updated details
     * @param user {Object} user object with updated values
     * @param isValid {boolean} form validation
     */
    $scope.submitUser = function(user, isValid) {
        console.log(user);
        console.log(isValid);

        // check to make sure the form is completely valid
        if (!isValid) {
            alert("Fill proper details.");
            return;
        }

        // Save disabled then do nothing
        if ($jQ("#submit-user").attr("disabled"))
            return;

        // Disable save btn
        $jQ("#submit-user").attr("disabled", "disabled");

        // Update user in json array
        AppOperations.updateUser(user);

        // Enable save btn
        $jQ("#submit-user").removeAttr("disabled");
    };

    /**
     * @name $scope.submitPassword
     * @function submitPassword
     * @memberOf mrp_app.mrpApp.ProfileController
     * @description Save user with updated password
     * @param user {Object} user object with updated values
     * @param isValid {boolean} form validation
     */
    $scope.submitPassword = function(user, isValid) {
        console.log(user);
        console.log(isValid);

        // check to make sure the form is completely valid
        if (!isValid) {
            alert("Fill proper details.");
            return;
        }

        // Save disabled then do nothing
        if ($jQ("#submit-user").attr("disabled"))
            return;

        // Disable save btn
        $jQ("#submit-user").attr("disabled", "disabled");

        // Check password
        if (user.password !== user.old_password) {
            alert("Old password not matched. Try again!!");

            // Enable save btn
            $jQ("#submit-user").removeAttr("disabled");

            return;
        }

        // Update new password
        user.password = user.new_password;

        // Update user in json array
        AppOperations.updateUser(user);

        // Enable save btn
        $jQ("#submit-user").removeAttr("disabled");

        alert("Password changed.");
    };
});