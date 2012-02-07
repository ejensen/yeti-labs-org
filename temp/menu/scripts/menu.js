yepnope({
	test: Modernizr.flexbox,
	nope: ['scripts/flexie.min.js'],
	complete: function () {
		if (document.Flexie){
			$(document.body).change(function () {
				setTimeout('Flexie.updateInstance()', 200);
			});
		}
	}
});
