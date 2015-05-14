// $jQ is now an alias to the jQuery function; creating the new alias is optional.
var $jQ = jQuery.noConflict();

var AppOperations = {
    
    // Gets room from json array by room id
    getRoom: function(roomId) {
        for (var i = 0; i < roomsJSON.length; i++) {
            if (roomId == roomsJSON[i].id)
                return roomsJSON[i];
        }
    }
};