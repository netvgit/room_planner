//Displays search landing page
 mrpApp.controller('SearchRoomsController', function($rootScope, $scope,searchSlotService,calendarService) {
     // Changes main content heading
     $rootScope.MainHeading = "Search Room";

     
     // Create empty slot search
     slotSearch = {};
     var showDate = new Date();
     
   
     slotSearch.date  = new Date();
     
     slotSearch.startTime = new Date();
     
     if(calendarService.dateObj.fromView != undefined){
		 showDate.setMonth(calendarService.dateObj.dateClicked._d.getMonth());
		 showDate.setDate(calendarService.dateObj.dateClicked._d.getDate());
		 showDate.setFullYear(calendarService.dateObj.dateClicked._d.getFullYear());
		 
    	 if(calendarService.dateObj.fromView == "month"){
    		 slotSearch.date = showDate;
    	 }
    	 else {
    		 slotSearch.date =  showDate;
    		 alert("dateclicked: " + calendarService.dateObj.dateClicked);
    		 showDate.setHours(calendarService.dateObj.dateClicked._d.getHours());
    		 showDate.setMinutes(calendarService.dateObj.dateClicked._d.getMinutes());
    		 alert( "resultDate :" +showDate);
    		 slotSearch.startTime =  showDate;
    	 }
     }
     
     // Set current time
     // var hr = date.getHours();
     // var min = date.getMinutes();
     //slotSearch.endTime = ((hr < 10) ? ("0" + hr) : hr) + ':' + ((min < 10) ? ("0" + min) : min);
     slotSearch.endTime = new Date();
     slotSearch.endTime.setMinutes(slotSearch.startTime.getMinutes() + 30);
    
     $scope.slotSearch = slotSearch;
     
     $scope.facilities = [{value : true, name : "Air Conditioner"},
                        {value : true , name : "Projector"},
                        {value : true , name : "Video Conferencing"},
                        {value : true , name : "Blah Blah"}];
     
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