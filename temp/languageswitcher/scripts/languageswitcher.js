(function () {
	var language_switcher = document.getElementById('language_switcher');
	
	language_switcher.onchange = function () {
		// e.g. http://mashup.mixedinkey.com/[path]/ChangeLanguage/?lang=[lang]
		var baseUrl = location.protocol + '//' + location.host + window.location.pathname;
		if (baseUrl[baseUrl.length - 1] !== '/') {
			baseUrl += '/';
		}
		window.location.replace(baseUrl + 'ChangeLanguage?lang=' + language_switcher.options[language_switcher.selectedIndex].value);
		
		/*
		// e.g. http://mashup.mixedinkey.com/ChangeLanguage/?lang=[lang]&path=[path]
		var baseUrl = location.protocol + '//' + location.host;
		window.location.replace(baseUrl + 'ChangeLanguage/?lang=' + language_switcher.options[language_switcher.selectedIndex].value + '&path=' + window.location.pathname);
		*/
	};
}());