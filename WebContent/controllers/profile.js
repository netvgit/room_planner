// Displays and manage logged in user's profile
 mrpApp.controller('ProfileController', function($rootScope, $scope) {
	 // Changes main content heading
     $rootScope.MainHeading = "My profile";
     
     // Active first tab
     $jQ('#profileTab a:first').tab('show');
 });