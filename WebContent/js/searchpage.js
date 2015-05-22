jQuery(function($) {
	toggle = 0;
	$('#toggle-filter').click(function(e) {
		e.preventDefault();
		if (toggle == 0) {
			$('#filters-column').animate({
				'right' : '0px'
			});
			toggle = 1;
		}

		else {
			$('#filters-column').animate({
				'right' : '-250px'
			});
			toggle = 0;
		}
	});
});