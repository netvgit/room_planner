/**
 * jQuery no conflict resolution by one more way
 */
jQuery(function($) {

    /**
     * Side menu bar is toggable and responsive too
     */
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        console.log("menu-toggle");
        $("#wrapper").toggleClass("toggled");
    });
});

