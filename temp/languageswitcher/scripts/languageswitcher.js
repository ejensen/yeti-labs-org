(function () {
	var language_switcher = document.getElementById('language_switcher');
	
	language_switcher.onchange = function () {
		var pattern = '${host}/${path}/ChangeLanguage/?lang=${lang}';
		//            '${host}/ChangeLanguage/?lang=${lang}&path=${path}';

		window.location.replace(window.location.protocol + '//' +
								pattern.replace('${host}', window.location.host)
								.replace('${path}', window.location.pathname)
								.replace('${lang}', language_switcher.options[language_switcher.selectedIndex].value)
								.replace(/\/\//g, '/')
							);
	};
}());