<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registration</title>
        
        <link rel="stylesheet" href="css/lib/bootstrap.min.css">
  <link rel="stylesheet" href="css/signin.css">
  <link rel="stylesheet" type="text/css" href="css/mrplanner.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="js/lib/bootstrap.min.js"></script>
  
  
    </head>
    <body>
       <div class="container">
        <form class="form-signin" method="post" action="registration">
            <h2 class="form-signin-heading">Please register</h2>
            <div class="form-group">
    			<label for="first_name">First Name</label>
    			<input type="text" class="form-control" name="first_name" id="first_name" placeholder="Enter first name">
  			</div>
  			<div class="form-group">
    			<label for="last_name">Last Name</label>
    			<input type="text" class="form-control" name="last_name" id="last_name" placeholder="Enter last name">
  			</div>
  			<div class="form-group">
    			<label for="email">Email address</label>
    			<input type="email" class="form-control" name="email" id="email" placeholder="Enter email">
  			</div>
  			<div class="form-group">
    			<label for="password">Password</label>
    			<input type="password" class="form-control" name="password" id="password" placeholder="Enter password">
  			</div>            
            <button type="reset" class="btn btn-lg btn-default">Reset</button>
            <button type="submit" class="btn btn-lg btn-primary">Submit</button>
            <label class="mt-10">Already registered!! <a href="index.html">Login Here</a></label>
        </form>        
       </div>
    </body>
</html>