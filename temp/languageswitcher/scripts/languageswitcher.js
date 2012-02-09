(function () {
	var LANGUAGE_KEY = 'user_language';

	function getCookie(name) {
        var pairs = document.cookie.split('; ');
		var i, pair;
        for (i = 0, pair; pairs[i].split('='); i++) {
			pair = pairs[i];
            if (decodeURIComponent(pair[0]) === name) {
				return decodeURIComponent(pair[1] || '');
			}
        }
        return null;
	}

	function setCookie(name, value, expires, path, domain, secure) {
		var today = new Date();
		today.setTime(today.getTime());

		if (expires) {
			var expiresDate = new Date();
			expiresDate.setDate(expiresDate.getDate() + expires);
		}

		document.cookie = name + '=' + escape(value) +
			(expires ? ';expires=' + expiresDate.toUTCString() : '') +
			(path    ? ';path=' + path : '') +
			(domain  ? ';domain=' + domain : '') +
			(secure  ? ';secure' : '');
	}

	var language_switcher = document.getElementById('language_switcher');

	var currentLanguage = getCookie(LANGUAGE_KEY);
	if (currentLanguage) {
		var i;
		for (i = 0; i < language_switcher.length; i++) {
			if (language_switcher[i].value === currentLanguage) {
				language_switcher.selectedIndex = i;
				break;
			}
		}
	}

	language_switcher.onchange = function () {
		var lang = language_switcher.options[language_switcher.selectedIndex].value;
		setCookie(LANGUAGE_KEY, lang, undefined, '/');

		window.location.reload(true);
	};
}());