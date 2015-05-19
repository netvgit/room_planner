// $jQ is now an alias to the jQuery function; creating the new alias is optional.
var $jQ = jQuery.noConflict();

var AppOperations = {

	// Gets room from json array by room id
	getRoom : function(roomId) {
		for (var i = 0; i < roomsJSON.length; i++) {
			if (roomId == roomsJSON[i].id)
				return roomsJSON[i];
		}
	},

	// Gets slot from json array by slot id
	getSlot : function(slotId) {
		for (var i = 0; i < slotsJSON.length; i++) {
			if (slotId == slotsJSON[i].id)
				return slotsJSON[i];
		}
	},

	// Gets current user from json array on user_id
	getCurrentUser : function() {
		for (var i = 0; i < userJSON.length; i++) {
			if (user_id == userJSON[i].email) {
				return userJSON[i];
			}
		}
	},

	// Update user
	updateUser : function(user) {
		for (var i = 0; i < userJSON.length; i++) {
			if (user.email == userJSON[i].email) {				
				userJSON[i] = user;
			}
		}
	}
};