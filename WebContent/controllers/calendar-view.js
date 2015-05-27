mrpApp.controller('CalendarViewController', function($rootScope, $scope,$compile,uiCalendarConfig,calendarService) {
    
	// Changes main content heading
    $rootScope.MainHeading = "Calendar";
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.newEvent = {};
    $scope.currentView = 'agendaDay';
    $scope.clickedEvent = {};

    /* event source that contains custom events on the scope */
    $scope.events = slotsJSON;
    
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    $scope.allMeetings = {
       color: 'black',
       textColor: 'white',
       events: slotsJSON
    };

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.toggleModal();
        $scope.clickedEvent = date;
    };
    
    
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };

    /* add custom event*/
    $scope.addEvent = function() {
      alert($scope.newEvent.title);
      $scope.events.push($scope.newEvent);
    };

    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      $scope.currentView = view;
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) { 
        element.attr({'tooltip': event.title,
                      'tooltip-append-to-body': true});
        $compile(element)($scope);
    };


    /**MODAL FUNCTIONS **/
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };

    $scope.dayClick = function( date, jsEvent, view){
      calendarService.dateObj = {
        dateClicked : date,
        fromView : $scope.currentView
      };

      // Show booking page with service variable calendarService
      window.location = '#/searchrooms';    
    };

    $scope.addNewEventModal = function(){
      $scope.toggleModal();
      $scope.addEvent();
    }

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 600,
        editable: true,
        theme:true,
        ignoreTimezone: false,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        defaultView: 'agendaDay',
        dayClick: $scope.dayClick,
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

    /* event sources array*/
    $scope.eventSources = [$scope.events];
    $scope.eventSources2 = [$scope.allMeetings];  
    
    /*
    (function changeClass(){
    	var spans = $jQ(".calendar .fc-prev-button .ui-icon-circle-triangle-w");
    	$jQ(spans[0]).addClass("glyphicon glyphicon-chevron-left");
    	$jQ(spans[0]).removeClass("ui-icon ui-icon-circle-triangle-w");
    	
    	spans = $jQ(".calendar .fc-next-button .ui-icon-circle-triangle-e");
    	$jQ(spans[0]).addClass("glyphicon glyphicon-chevron-right");
    	$jQ(spans[0]).removeClass("ui-icon ui-icon-circle-triangle-e");
    	
    })();*/
});

mrpApp.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value){
            $jQ(element).modal("show");
          }
          else{
            $jQ(element).modal("hide");
            
          }
        });

        $jQ(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $jQ(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
/* EOF */