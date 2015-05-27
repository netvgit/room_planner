/**
 * jQuery no conflict resolution by one more way
 * 
 * @author farah
 * 
 */
jQuery(function($) {

	// Get current user
    var currentUser = AppOperations.getCurrentUser();
    
    // On role remove some functionality
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

/**
 * Toggles side bar
 */
function toggleSideBar()
{
	$jQ("#wrapper").toggleClass("toggled");	
	$jQ("#toggleBtnSidebar").toggle();
}