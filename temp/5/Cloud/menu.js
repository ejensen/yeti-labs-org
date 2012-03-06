yepnope({
	test: Modernizr.flexbox,
	nope: ['/Cloud/selectivizr.min.js', '/Cloud/flexie.min.js'],
	complete: function () {
		if (Flexie){
			$(document.body).change(function () {
				setTimeout('Flexie.updateInstance()', 200);
			});
		}
	}
});
