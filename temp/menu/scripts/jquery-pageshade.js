(function($) {
    $.fn.pageShade = function(options) { 
        var defaults = {  
		    animationSpeed: 300, //how fast animtions are
			offsetPercentage: 0.75 //what scroll percentage before the shade pops up
    	};
        var options = $.extend({}, defaults, options);
		var $elements = this;
		var scrollTimer;
		
		$(window).scroll(function () {
			window.clearTimeout(scrollTimer);
			scrollTimer = window.setTimeout(function () { 
				if ($(window).scrollTop() / ($(document).height() - $(window).height()) >= options.offsetPercentage) {
					$elements.each(function() {
						$(this).slideDown(options.animationSpeed);
					});
				} else {
					$elements.each(function() {
						$(this).stop(true, true).slideUp(options.animationSpeed);
					});
				}
			}, 50);
		});
		return this;
    }
})(jQuery);