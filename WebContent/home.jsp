<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html lang="en" ng-app="mrpApp">
<head>
  <meta charset="utf-8">
  <title>MR Planner Dashboard</title>

  <link rel="stylesheet" href="css/lib/bootstrap.min.css">
  <link rel="stylesheet" href="css/lib/fullcalendar.css">
  <link rel="stylesheet" href="css/lib/jquery-ui.theme.min.css">
  <link rel="stylesheet" href="css/signin.css">
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/mrplanner.css">
  <link rel="stylesheet" href="css/searchpage.css">
  <link rel="stylesheet" href="css/calendarDemo.css" />   
  
  <script src="js/lib/jquery.min.js"></script>
  <script src="js/lib/bootstrap.min.js"></script>
  <script src="js/lib/angular.min.js"></script>
  <script src="js/lib/angular-route.js"></script>
  <script src="js/lib/ui-bootstrap-tpls-0.9.0.js"></script>
  <script src="js/lib/moment.js"></script>
  <script src="js/lib/fullcalendar.js"></script>
  <script src="js/lib/gcal.js"></script>
  <script src="js/calendar.js"></script>
  <script src="js/lib/checklist-model.js"></script>
    
  <script src="data/mrpJson.js"></script>
  <script src="js/mrpCore.js"></script>
  <script src="controllers/mrpAngular.js"></script>
  <script src="controllers/facility.js"></script>
  <script src="controllers/location.js"></script>
  <script src="controllers/profile.js"></script>
  <script src="controllers/room.js"></script>
  <script src="controllers/slot.js"></script>
  <script src="controllers/user.js"></script>
  <script src="controllers/search-room.js"></script>
  <script src="controllers/calendar-view.js"></script>
  <script src="js/mrpUi.js"></script>
  
  <!-- <script src="http://223.224.131.144/scripts/Anchor.js"></script> -->
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
                <ul class="nav navbar-nav navbar-right">                    
                    <li>
                        <a href="#" ng-bind="AssignedDate.now() | date:'dd MMM yyyy HH:mm:ss'"></a>
                    </li>
                    <li> <a href="#" ng-bind="mrp.userId"></a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#profile">Profile</a></li>
                            <li><a href="#" id="menu-toggle">Toggle Side Menu</a></li>
                            <li><a href="#">My Meetings</a></li>
                            <li><a href="#">All Meetings</a></li>
                            <li class="divider"></li>
                            <li><a href="logout.jsp">Logout</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="navbar-form navbar-right">
           			 <input type="text" class="form-control" placeholder="Search Meeting...">
          		</form>
            </div>
        </div>
    </nav>

    <div class="" id="wrapper">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="active" title="Book Room"><a href="#searchrooms"><span class="glyphicon glyphicon-plus v-img" aria-hidden="true"></span></a></li>
                <li title="My Profile"><a href="#profile"><span class="glyphicon glyphicon-user v-img" aria-hidden="true"></span></a></li>
                <li title="Manage Users" class="not-admin"><a href="#manageusers"><span class="glyphicon glyphicon-cog v-img" aria-hidden="true"></span></a></li>
                <li title="Calendar"><a href="#calendarview"><span class="glyphicon glyphicon-calendar v-img" aria-hidden="true"></span></a></li>                
                <li title="Manage Room" class="not-admin-rm"><a href="#managerooms"><span class="glyphicon glyphicon-home v-img" aria-hidden="true"></span></a></li>
                <li title="Manage Facility" class="not-admin-rm"><a href="#managefacilities"><span class="glyphicon glyphicon-briefcase v-img" aria-hidden="true"></span></a></li>
                <li title="Manage Location" class="not-admin-rm"><a href="#managelocations"><span class="glyphicon glyphicon-map-marker v-img" aria-hidden="true"></span></a></li>
                <li title="Logout"><a href="logout.jsp"><span class="glyphicon glyphicon-off v-img" aria-hidden="true"></span></a></li>                
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="col-lg-12" id="main-content">
                    <h1 class="page-header orange-color mt-mns-20" ng-bind="MainHeading"></h1>
                    <div id="content" ng-view><img src="images/ajax-spinner.gif"></img>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
</body>

</html>