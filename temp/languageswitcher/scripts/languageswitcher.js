(function () {
	var language_switcher = document.getElementById('language_switcher');
	
	language_switcher.onchange = function () {
		var baseUrl = location.protocol + '//' + location.host + window.location.pathname;
		if (baseUrl[baseUrl.length - 1] !== '/') {
			baseUrl += '/';
		}
		window.location.replace(baseUrl + 'ChangeLanguage?lang=' + language_switcher.options[language_switcher.selectedIndex].value);
	};
}());