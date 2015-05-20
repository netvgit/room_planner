/**
 * jQuery no conflict resolution by one more way
 */
jQuery(function($) {

	var currentUser = AppOperations.getCurrentUser();
	if (currentUser.role === "Resource Manager")
		$(".not-admin").remove();
	else if (currentUser.role === "Normal User") {
		$(".not-admin").remove();
		$(".not-admin-rm").remove();
	}

	/**
	 * Side menu bar is toggable and responsive too
	 */
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		console.log("menu-toggle");
		$("#wrapper").toggleClass("toggled");
	});
});