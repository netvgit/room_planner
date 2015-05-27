/**
 * This file have all JSON management functions. 
 * 
 * @author farah 
 */
// $jQ is now an alias to the jQuery function; creating the new alias is optional.
var $jQ = jQuery.noConflict();

// Singltone
// Object literal
// Global object for performing various operations
var AppOperations = {

    // Gets room from json array by room id
    getRoom: function(roomId) {
        for (var i = 0; i < roomsJSON.length; i++) {
            if (roomId == roomsJSON[i].id)
                return roomsJSON[i];
        }
    },

    // Gets slot from json array by slot id
    getSlot: function(slotId) {
        for (var i = 0; i < slotsJSON.length; i++) {
            if (slotId == slotsJSON[i].id)
                return slotsJSON[i];
        }
    },

    // Gets current user from json array on user_id
    getCurrentUser: function() {
        for (var i = 0; i < userJSON.length; i++) {
            if (user_id == userJSON[i].email) {
                return userJSON[i];
            }
        }
    },

    // Update user
    updateUser: function(user) {
        for (var i = 0; i < userJSON.length; i++) {
            if (user.id == userJSON[i].id) {
                userJSON[i] = user;
            }
        }
    },

    // Update room
    updateRoom: function(room) {
        for (var i = 0; i < roomsJSON.length; i++) {
            if (room.id == roomsJSON[i].id) {
                roomsJSON[i] = room;
            }
        }
    },

    // Update location
    updateLocation: function(location) {
        for (var i = 0; i < locationsJSON.length; i++) {
            if (location.id == locationsJSON[i].id) {
                locationsJSON[i] = location;
            }
        }
    },

    // Update facility
    updateFacility: function(facility) {
        for (var i = 0; i < facilitiesJSON.length; i++) {
            if (facility.id == facilitiesJSON[i].id) {
                facilitiesJSON[i] = facility;
            }
        }
    },

    // Delete Rooms
    deleteRooms: function(rooms) {
        for (var i = 0; i < rooms.length; i++) {
            roomsJSON = $jQ.grep(roomsJSON, function(r) {
                return r.id !== rooms[i];
            });
        }
        return roomsJSON;
    },

    // Delete Users
    deleteUsers: function(users) {
        for (var i = 0; i < users.length; i++) {
            userJSON = $jQ.grep(userJSON, function(u) {
                return u.id !== users[i];
            });
        }
        return userJSON;
    },

    // Delete Locations
    deleteLocations: function(locations) {
        for (var i = 0; i < locations.length; i++) {
            locationsJSON = $jQ.grep(locationsJSON, function(l) {
                return l.id !== locations[i];
            });
        }
        return locationsJSON;
    },

    // Delete Facilities
    deleteFacilities: function(facilities) {
        for (var i = 0; i < facilities.length; i++) {
            facilitiesJSON = $jQ.grep(facilitiesJSON, function(f) {
                return f.id !== facilities[i];
            });
        }
        return facilitiesJSON;
    },

    // Serialize form and return json
    serializeForm: function(form) {
        // Serialize form
        var newJson = $jQ(form).serializeArray();

        // Create new json object
        var newJsonObject = {};

        // Map all key,value
        $jQ.each(newJson,
            function(i, v) {
                newJsonObject[v.name] = v.value;
            });
        return newJsonObject;
    }
};