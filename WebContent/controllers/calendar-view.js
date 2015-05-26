mrpApp.controller('CalendarViewController', function($rootScope, $scope,$compile,uiCalendarConfig,calendarService) {
    // Changes main content heading
    $rootScope.MainHeading = "Calendar";
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.newEvent = {};
    $scope.currentView = 'agendaDay'

    /* event source that contains custom events on the scope */
    $scope.events = slotsJSON;/*[
      {title: 'Meeting-1',start:new Date(y, m, d + 5),end:new Date(y, m, d + 7), eventAgenda: 'Meeting-1 Agenda blah blah', eventAttendees: 'ApoorvaJain;'},
      {title: 'Meeting-2',start:new Date(y, m, d - 5),end:new Date(y, m, d - 3), eventAgenda: 'Meeting-1 Agenda blah blah', eventAttendees: 'ApoorvaJain;'},
      {id: 999,title: 'Repeating Meeting-1',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Conference-1',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Project Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false}
    ];*/
    
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    $scope.calEventsExt = {
       color: '#f00',
       textColor: 'yellow',
       events: [ 
          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ]
    };

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + ' was clicked ');
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
        height: 450,
        editable: true,
        theme:false,
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
    $scope.eventSources2 = [$scope.calEventsExt];   
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