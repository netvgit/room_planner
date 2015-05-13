##Overview: 
This document talks about the scope of Room Planner App.

##Description: 
This app will have primarily 3 user roles - Regular, Resource Manager and Administrator. Below is the list of actions and capabilities each user has:

####Regular User
- User will register at the application providing email address, password, and name
- User will receive activation link to activate their account
- User will login at the application using the email address and password provided at registration
- After logging in, user will view search fields, like Date, From Time - To Time, Number of Attendees etc.. where he can provide the values and search for available rooms
- On clicking Search button after providing relevant values, user will be get to see a list of available rooms
- If no rooms are available, user will be prompted to modify their search criteria or go to calendar view as described later below
- User will select a room from the list after search to book it
- When user selects a room to book from the list, he will get to see a form where he will have to provide details about the meeting, which will include the agenda, title, list of attendees etc..
- User will be able to set a meeting to be recurring
- Once details are provided and user confirms by clicking button on the form, the room will get booked for the user.
- All the attendees added by the user will receive an email notification about the meeting.
- User can view their existing bookings by clicking tab - My Meetings
- My meetings will be a calendar view with options of Day, Week and Month views, with default as Day view
- User will be able to view all his meetings scheduled for the day, week or month in this calendar view as per the slots
- Clicking on a slot which is already booked by the user will take the user to the meeting details page
- If user created the meeting then they can cancel it too, but if they were only a part as an attendee then they can only view the list of meeting scheduled for them
- Clicking on the slot which is empty will take the user to book meeting page with time and date already selected as per the slot chosen
- Calendar will also provide an option to view available rooms at the top so that the user can view which rooms are free at what time so far

####Resource Manager
- A Resource Manager User will have all capabilities of a Regular User with few more additional allowed operations.
- A Resource Manager User will be able to perform CRUD Operations on Rooms
- A Resource Manager User will be able to Create as well as Cancel meetings by other users as well

####Administrator
- An Administrator will have all capabilities of a Regular as well as Resource Manager User along with few more additional allowed operations.
- An Administrator will be able to designate or remove a Regular User as Resource Manager User.
- An Administrator will be able to block a user
Such a user will be created by default when an application is installed for the first time

##Advanced Features
All the above are covered in the basic list of features which the application will have. There are few advanced features too which will be developed later:

- User will not have to register and will be able to login with their Google Account associated with the organization, that is, with a set of allowed domains
- User will be able to view the calendars of other people, though, only in terms of whether they are free without divulging any more details about the meetings of other users
- User's Google Calendar would be updated as per the meeting scheduled in the application
- Users will receive notifications as per the meetings coming up through SMS.


