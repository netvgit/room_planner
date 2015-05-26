/**
 * Global object of rooms in array.
 */
var roomsJSON = [{
    "id": 1,
    "name": "Angular js Room",
    "location": "Panjagutta, Hyderabad",
    "capacity": 10,
    "color": "red",
    "facilities" : ["AC","White Board"]
}, {
    "id": 2,
    "name": "Java Room",
    "location": "Madhapur, Hyderabad",
    "capacity": 16,
    "color": "green",
    "facilities" : ["AC","White Board"]
}, {
    "id": 3,
    "name": "Java Script Room",
    "location": "Hitech City, Hyderabad",
    "capacity": 15,
    "color": "black",
    "facilities" : ["AC","White Board"]
}, {
    "id": 4,
    "name": "VB Room",
    "location": "Kondapur, Hyderabad",
    "capacity": 10,
    "color": "blue",
    "facilities" : ["AC","White Board"]
}, {
    "id": 5,
    "name": "CSS Room",
    "location": "Kothaguda, Hyderabad",
    "capacity": 100,
    "color": "red",
    "facilities" : ["AC","White Board"]
}, {
    "id": 6,
    "name": "HTML Room",
    "location": "Madhapur, Hyderabad",
    "capacity": 50,
    "color": "brown",
    "facilities" : ["AC","White Board"]
}, {
    "id": 7,
    "name": "JQuery Room",
    "location": "Ameerpet, Hyderabad",
    "capacity": 70,
    "color": "red",
    "facilities" : ["AC","White Board"]
}, {
    "id": 8,
    "name": "Shell Script Room",
    "location": "MLA Colony, Hyderabad",
    "capacity": 80,
    "color": "skyblue",
    "facilities" : ["AC","White Board"]
}, {
    "id": 9,
    "name": "Ruby Room",
    "location": "Kondapur, Hyderabad",
    "capacity": 34,
    "color": "red",
    "facilities" : ["AC","White Board"]
}, {
    "id": 10,
    "name": "Python Room",
    "location": "Madhapur, Hyderabad",
    "capacity": 20,
    "color": "yellow",
    "facilities" : ["AC","White Board"]
}, {
    "id": 11,
    "name": "C Room",
    "location": "Charminar, Hyderabad",
    "capacity": 30,
    "color": "red",
    "facilities" : ["AC","White Board"]
}, {
    "id": 12,
    "name": "C++ Room",
    "location": "Medhipattanam, Hyderabad",
    "capacity": 10,
    "color": "pink",
    "facilities" : ["AC","White Board"]
}];


/**
 * Global object of slots in array.
 * Date : yyyy-dd-MM
 */

var slotsJSON = [{
    "id": 1,
    "room_id": 1,
    "owner_id" : "admin",
    "date":'2015-05-05',
    "start": new Date("2015-05-05 10:00 AM"),
    "end": new Date("2015-05-05 11:00 AM"),
    "agenda":"Next step1",
    "title":"Next step1",
    "attendees":"sdfsd@sdf.sdfs,sdfsd@sdf.sdfs"
}, {
    "id": 2,
    "room_id": 3,
    "owner_id" : "admin",
    "date":'2015-05-15',
    "start": new Date("2015-05-15 10:00 AM"),
    "end": new Date("2015-05-15 11:00 AM"),
    "agenda":"Next step2",
    "title":"Next step2",
    "attendees":"sdfsd@sdf.sdfs,sdfsd@sdf.sdfs"
}];

/**
 * Global object of user.
 */
var userJSON = [{
    "id": 1,
    "email":"admin@imaginea.com",
    "password":"admin",
    "first_name": "Admin",
    "last_name" : "Admin",
    "contact_numbers": "1234567890",
    "role": "Admin",
    "notifications": {"1":true,"2":true,"3":true,"4":true,"5":true,"6":true}
},
{
    "id": 2,
    "email":"admin@admin",
    "password":"admin",
    "first_name": "admin",
    "last_name" : "admin",
    "contact_numbers": "0987654321",
    "role": "Resource Manager",
    "notifications": {"1":true,"2":true,"3":true,"4":true,"5":false,"6":false}
},
{
    "id": 3,
    "email":"farahnaj.inamdar@imaginea.com",
    "password":"admin",
    "first_name": "Farah",
    "last_name" : "Inamdar",
    "contact_numbers": "1234567890",
    "role": "Normal User",
    "notifications": {"1":true,"2":true,"3":true,"4":false,"5":false,"6":false}
}];

/**
 * Global object of user role.
 */
var userRoleJSON = [{
    "id": 1,
    "type":"Admin"
},
{
    "id": 2,
    "type":"Resource Manager"    
},
{
    "id": 3,
    "type":"Normal User"
}];

/**
 * Global object of notifications.
 */
var notificationsJSON = [{
    "id": 1,
    "type":"Invite"
},
{
    "id": 2,
    "type":"Created"    
},
{
    "id": 3,
    "type":"Changed"
},
{
    "id": 4,
    "type":"Canceled"
},
{
    "id": 5,
    "type":"Day"    
},
{
    "id": 6,
    "type":"Hour"
}];

/**
 * Global object of facilities.
 */
var facilitiesJSON = [{
    "id": 1,
    "type":"AC"
},
{
    "id": 2,
    "type":"Projector"    
},
{
    "id": 3,
    "type":"White Board"
},
{
    "id": 4,
    "type":"Camera"
},
{
    "id": 5,
    "type":"Phone"    
}];

/**
 * Global object of locations.
 */
var locationsJSON = [{
    "id": 1,    
    "name":"xyz",
    "floor":1,
    "building":"B1",
    "city":"Hyderabad",
    "state":"Aandra Pradesh",
    "country":"India",
    "postal_code":12345,
    "number_rooms":2
},
{
    "id": 2,
    "name":"abc",
    "floor":2,
    "building":"B2",
    "city":"Hyderabad",
    "state":"Aandra Pradesh",
    "country":"India",
    "postal_code":45678,
    "number_rooms":3    
},
{
    "id": 3,
    "name":"pqr",
    "floor":3,
    "building":"B3",
    "city":"Hyderabad",
    "state":"Aandra Pradesh",
    "country":"India",
    "postal_code":678905,
    "number_rooms":6
}];