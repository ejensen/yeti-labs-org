$(function () {
	var PAYPAL_LINK = 'https://www.e-junkie.com/ecom/gb.php?on0=D&c=single&cl=1090';
	var GOOGLECHECKOUT_LINK = 'https://www.e-junkie.com/ecom/gb.php?on0=D&c=gc&cl=1090&ejc=4';

	var PRODUCTID_PARAM = '&i=';
	var AFFILIATE_PARAM = '&os0=';
	var COOKIE_NAME = 'MixedInKeyVIP';

	var OS = {
		Win: { Description: 'Digital Download for Windows', Code: 0 },
		Mac: { Description: 'Digital Download for Mac OS X', Code: 2 }
	};

	var products = {
		MIK: {
			Name: 'Mixed In Key 5.0',
			Price: 58,
			Code: 50001,
			BannerImage: 'images/shoppingCartTop_MIK.png',
			Description: 'Analyze your music files and start using harmonic mixing. Award-winning software. '
		},
		PN: {
			Name: 'Platinum Notes 3.0',
			Price: 98,
			Code: 301,
			BannerImage: 'images/shoppingCartTop_PN.png',
			Description: 'Improve your files and give them perfect volume and correct pitch. Remove distortion and clipped peaks. 100% automated and designed for top DJs.'
		},
		Mashup: {
			Name: 'Mashup Version 1.0',
			Price: 39,
			Code: 1200,
			BannerImage: 'images/shoppingCartTop.png',
			Description: 'Create your own mashups in minutes.'
		}
	}

	var options = {
		Product: products.Mashup, // Main product.
		Bundles: [products.MIK, products.PN] // Choose which bundles to display.
	};

	function getCookie(name) {
		var pairs = document.cookie.split('; ');
		var i, pair;
		for (i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
			if (decodeURIComponent(pair[0]) === name) {
				return decodeURIComponent(pair[1] || '');
			}
		}
		return null;
	}

	function onBundleChanged() {
		var code = options.Product.Code + options.OS.Code;
		$('.bundle_checkbox').each(function () {
			var $checkBox = $(this);
			if ($checkBox.is(':checked')) {
				code += parseInt($checkBox.data('code'), 10);
			}
		});

		var checkout_params = PRODUCTID_PARAM + code;

		var cookie_value = getCookie(COOKIE_NAME);
		if (cookie_value) {
			cookie_value = cookie_value.substring('VIP='.length, cookie_value.length);
			checkout_params += AFFILIATE_PARAM + cookie_value;
		}

		$('#paypal_button').attr('href', PAYPAL_LINK + checkout_params);
		$('#googlecheckout_button').attr('href', GOOGLECHECKOUT_LINK + checkout_params);
	}

	function buyNowButtonClicked(e, os) {
		options.OS = os;

		$('#buyNowTemplate').tmpl(options).lightbox_me({ centered: true, closeClick: false, lightboxSpeed: 150, overlaySpeed: 150, destroyOnClose: true });

		onBundleChanged();
		$('.bundle_checkbox').change(onBundleChanged);

		e.preventDefault();
	}

	$('#buyWindowsButton').click(function (e) {
		buyNowButtonClicked(e, OS.Win);
	});

	$('#buyMacOSXButton').click(function (e) {
		buyNowButtonClicked(e, OS.Mac);
	});
});