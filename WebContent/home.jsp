<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html lang="en" ng-app="mrpApp">
<head>
  <meta charset="utf-8">
  <title>MR Planner Dashboard</title>

  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/signin.css">
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/mrplanner.css">
  <link rel="stylesheet" href="css/searchpage.css">  
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <script src="js/lib/angular.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.js"></script>
    
  <script src="data/mrpJson.js"></script>
  <script src="js/mrpCore.js"></script>
  <script src="js/mrpAngular.js"></script>
  <script src="js/mrpUi.js"></script>
  <script src="js/searchpage.js"></script>
</head>

<%
    if ((session.getAttribute("userid") == null) || (session.getAttribute("userid") == "")) {
%>
You are not logged in<br/>
<a href="index.html">Please Login</a>
<% return;}
String userId = session.getAttribute("userid").toString();
%>

<script language="javascript"> 
var user_id="<%=userId%>";
</script> 

<body ng-controller="MRPController">

    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mrp-collapse" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">MRPlanner</a>
            </div>

            <div class="collapse navbar-collapse" id="mrp-collapse">
                <div class="navbar-left">
                    <input class="search-input" placeholder="Search Meeting..." type="text">
                    <span class="glyphicon glyphicon-search" aria-hidden="true" style="float: right; align-self: center;"></span>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#" ng-bind="AssignedDate.now() | date:'dd MMM yyyy HH:mm:ss'"></a>
                    </li>
                    <li> <a href="#" ng-bind="mrp.userId"></a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Profile</a></li>
                            <li><a href="#" id="menu-toggle">Toggle Side Menu</a></li>
                            <li><a href="#">My Meetings</a></li>
                            <li><a href="#">All Meetings</a></li>
                            <li class="divider"></li>
                            <li><a href="logout.jsp">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="" id="wrapper">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="active" title="Book Room"><a href="#"><span class="glyphicon glyphicon-plus v-img" aria-hidden="true"></span></a></li>
                <li title="My Profile"><a href="#"><span class="glyphicon glyphicon-user v-img" aria-hidden="true"></span></a></li>
                <li title="Manage Users"><a href="#"><span class="glyphicon glyphicon-cog v-img" aria-hidden="true"></span></a></li>
                <li title="Calendar"><a href="#"><span class="glyphicon glyphicon-calendar v-img" aria-hidden="true"></span></a></li>
                <li title="Modified Filter"><a href="#"><span class="glyphicon glyphicon-filter v-img" aria-hidden="true"></span></a></li>
                <li title="Manage Room"><a href=""><span class="glyphicon glyphicon-home v-img" aria-hidden="true"></span></a></li>
                <li title="Manage Facility"><a href=""><span class="glyphicon glyphicon-briefcase v-img" aria-hidden="true"></span></a></li>
                <li title="Manage Location"><a href=""><span class="glyphicon glyphicon-map-marker v-img" aria-hidden="true"></span></a></li>
                <li title="Logout"><a href="logout.jsp"><span class="glyphicon glyphicon-off v-img" aria-hidden="true"></span></a></li>                
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="col-lg-12" id="main-content">
                    <h1 class="page-header" ng-bind="MainHeading"></h1>
                    <div id="content" ng-view><img src="images/ajax-spinner.gif"></img>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>


 <script type="text/ng-template" id="availableroomsView.htm">
        <b>Date :</b><span ng-bind="mrp.searchSlot.date"></span><br>
		<b>Start Time :</b><span ng-bind="mrp.searchSlot.startTime"></span><br>
		<b>End Time :</b><span ng-bind="mrp.searchSlot.endTime"></span><br>
         <div class="row">
            <div class="col-xs-6 col-lg-4 room-body" ng-repeat="room in mrp.roomsList | filter:mrp.roomsList.search | orderBy:'name'">
                <div ng-click='bookSlot(room.id)'><h1><span class="label label-default">{{room.name}}</span></h1>
                    <b>Location: </b><span ng-bind="room.location"></span><br>
                    <b>Capacity: </b><span ng-bind="room.capacity"></span>
                </div>
                <div class="room-overlay c-p" ng-click='bookSlot(room.id)'>
                    <b>Name: </b>{{room.name}}
                    <br>
                    <b>Location: </b><span ng-bind="room.location"></span>
                    <br>
                    <b>Capacity: </b><span ng-bind="room.capacity"></span>
                    <br>
                    <b>Color: </b><span ng-bind="room.color"></span>
                    <br>
                    <b>Facilities: </b><span ng-bind="room.facilities"></span>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="bookSlotModal" tabindex="-1" role="dialog" aria-labelledby="bookSlotModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="bookSlotModalLabel">Book Slot</h4>
                    </div>
                    <div class="modal-body">
                       <div class="jumbotron" style="padding: 2px;">
                        <h4>Meeting Room Details </h4> 
                        Name: {{room.name}}<br>
                        Location: <span ng-bind="room.location"></span><br>
                        Facilities: <span ng-bind="room.facilities"></span><br>
                        Date: <span ng-bind="mrp.searchSlot.date"></span><br>
						Start Time: <span ng-bind="mrp.searchSlot.startTime"></span><br>
						End Time: <span ng-bind="mrp.searchSlot.endTime"></span>
                       </div>
 
                       <!-- FORM -->
                       <form name="slotForm" novalidate>

        				    <!--Meeting NAME -->
        					<div class="form-group">
            	               <label>Meeting Name</label> 
                               <input type="text" name="name" class="form-control" ng-model="slot.name" required>
                            </div>

        					<!-- Agenda -->
        					<div class="form-group">
            					<label>Agenda</label>
            					<input type="text" name="agenda" class="form-control" ng-model="slot.agenda" ng-minlength="3">
        				    </div>
        
        					<!-- Attendees -->
        					<div class="form-group">
            					<label>Attendees</label>
            					<input type="text" name="attendees" class="form-control" ng-model="slot.attendees">
        					</div>
                        </form>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" ng-click="submitSlot(slot, room,slotForm.$valid)">Book</button>
                      </div>
                </div>
            </div>
        </div>
</script>


<script type="text/ng-template" id="slotDetailView.htm">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title" ng-bind="slot.name"></h3>                
            </div>
            <div class="panel-body">                
                <b>Owner: </b><span ng-bind="slot.owner_id"></span><br>
                <b>Agenda: </b><span ng-bind="slot.agenda"></span><br>
                <b>Attendees: </b><span ng-bind="slot.attendees"></span><br>
                <b>Date: </b><span ng-bind="slot.date | date:'dd MMM yyyy'"></span><br>
                <b>Start Time: </b><span ng-bind="slot.start_time | date:'hh:mm a'"></span><br>
                <b>End Time: </b><span ng-bind="slot.end_time | date:'hh:mm a'"></span><br><br>
                
                <div class="jumbotron" style="padding: 2px;">
                        <h4>Venue </h4> 
                        Meeting Room Name: {{room.name}}<br>
                        Meeting Room Number: {{room.id}}<br>
                        Location: <span ng-bind="room.location"></span><br>
                        Facilities: <span ng-bind="room.facilities"></span>
                </div>
            </div>
        </div>
</script>

<script type="text/ng-template" id="searchRoomsView.htm">
<div class="container">
   <form name="searchRoomForm" novalidate id="searchRoomForm">
			<div class="row">
				<div class="col-sm-8 col-xs-12 left-column">
					<div class="row">
						<div class="col-sm-6">
							<span>DATE: </span>
							<div class="form-group">
				                <div class='input-group'>				           			
				                    <span class="input-group-addon">
				                    	<span class="glyphicon glyphicon-calendar"></span>
				                    </span>
									<input type='date' class="form-control" name="date" ng-model="slotSearch.date" required/>
				                </div>
				            </div>
					</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<span>FROM: </span>
							<div class="form-group">
				                <div class='input-group'>				           			
				                    <span class="input-group-addon">
				                    	<span class="glyphicon glyphicon-time"></span>
				                    </span>
									<input type='time' class="form-control" name="startTime" ng-model="slotSearch.startTime" required/>
				                </div>
				            </div>
						</div>
						<div class="col-sm-6">
							<span>TILL: </span>
							<div class="form-group">
				                <div class='input-group'>			           			
				                    <span class="input-group-addon">
				                    	<span class="glyphicon glyphicon-time"></span>
				                    </span>
									<input type='time' class="form-control" name="endTime" ng-model="slotSearch.endTime"/>
				                </div>
				            </div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="input-group">
								<span class="input-group-addon">
					            	<span class="glyphicon glyphicon-user"></span>
					            </span>
					            <input type='text' type="number" class="form-control" placeholder="No of attendees"/>
				            </div>
						</div>
						<div class="col-sm-6">
							<div class="input-group" id="select-div">
					            <span class="input-group-addon">
					            	<span class="glyphicon glyphicon-map-marker"></span>
					            </span>
					            <select class="form-control" id="sel1">
					              <option>Hyderabad</option>
					              <option>Banglore</option>
					              <option>Chennai</option>
					              <option>United States</option>
					            </select>
					            <br>
				            </div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 checkbox">
						    <label>
						      <input type="checkbox"> Recurring
						    </label>
						</div>
					</div>
					<div class="row">
						<div>
							<button class="btn btn-inverse" type="button" id="submit-button" ng-click="submitSearch(slotSearch, searchRoomForm.$valid)">Submit</button>
						</div>
					</div>

				</div> <!-- Datetimepicker, other input fields --> 

				<div class="col-sm-4" id="filters-column">
					<!-- <button id="toggle-filter"><span>F</span></button> -->
					<button id="toggle-filter">
				        <span class="glyphicon glypgicon-user">F</span>
			        </button>
					<div>
						<h3 class="text-center">Facilities Required</h3>
			            <div style="overflow: auto;">
			            	<ul id="check-list-box" class="list-group checked-list-box">
			                  <li class="list-group-item">Air Conditioner</li>
			                  <li class="list-group-item">Projector</li>
			                  <li class="list-group-item">White Board</li>
			                  <li class="list-group-item">Telephones</li>
			                  <li class="list-group-item">Speaker</li>
			                </ul>
			                <br />
			            </div>
		            </div>
				</div> <!-- Filters Column -->
			</div><!-- Main Row division -->
			</form>
</div>
</script>
</body>

</html>