yepnope({
	test: Modernizr.flexbox,
	nope: ['scripts/selectivizr.min.js', 'scripts/flexie.min.js'],
	complete: function () {
		if (Flexie){
			$(document.body).change(function () {
				setTimeout('Flexie.updateInstance()', 200);
			});
		}
	}
});
