/**
 * Displays single selected slot in slot detail view
 * @description This is angular controller for displaying individual slot.
 * @class mrp_app.mrpApp.SlotDetailController 
 */
mrpApp.controller('SlotDetailController', function($rootScope, $scope, $routeParams) {
    // Gets id of slot from route
    $scope.slotId = $routeParams.slotId;

    // Gets slot from slots json array by id
    $scope.slot = AppOperations.getSlot($scope.slotId);

    // Gets room1 from rooms json array by id
    $scope.room = AppOperations.getRoom($scope.slot.room_id);

    // Changes main content heading
    $rootScope.MainHeading = "Meeting";
});