//Displays search landing page
 mrpApp.controller('SearchRoomsController', function($rootScope, $scope,searchSlotService) {
     // Changes main content heading
     $rootScope.MainHeading = "Search Room";
     
     // Create empty slot search
     slotSearch = {};
     
     // Set current date
     var date = new Date();
     var day = date.getDate();
     var monthIndex = date.getMonth();
     var year = date.getFullYear();
     slotSearch.date = year + '-' + ((monthIndex < 10) ? ("0" + monthIndex) : monthIndex) + '-' + ((day < 10) ? ("0" + day) : day);

     // Set current time
     var hr = date.getHours();
     var min = date.getMinutes();
     slotSearch.startTime = ((hr < 10) ? ("0" + hr) : hr) + ':' + ((min < 10) ? ("0" + min) : min);
     
     // Set current time
     var hr = date.getHours();
     var min = date.getMinutes();
     slotSearch.endTime = ((hr < 10) ? ("0" + hr) : hr) + ':' + ((min < 10) ? ("0" + min) : min);
    
     $scope.slotSearch = slotSearch;
    
     
     // Submit search details to find room
     $scope.submitSearch = function(slotSearch, isValid) {
         console.log(slotSearch);
         console.log(isValid);     
         
         // check to make sure the form is completely valid
         if (!isValid) {
             alert("Fill proper details.");
             return;
         }
         
         searchSlotService.dataObj = slotSearch;
         
         // Show slot in slot detail view
         window.location = '#/availablerooms';
     };
 });