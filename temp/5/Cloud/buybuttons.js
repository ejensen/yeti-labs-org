function buyButtons (options) {
	var PAYPAL_LINK = 'https://www.e-junkie.com/ecom/gb.php?on0=D&c=single&cl=1090';
	var GOOGLECHECKOUT_LINK = 'https://www.e-junkie.com/ecom/gb.php?on0=D&c=gc&cl=1090&ejc=4';

	var PRODUCTID_PARAM = '&i=';
	var AFFILIATE_PARAM = '&os0=';
	var COOKIE_NAME = 'MixedInKeyVIP';

	var default_options = {
		Win_Button: $('#buyWindowsButton'),
		Mac_Button: $('#buyMacOSXButton')
	};

	options = $.extend({}, default_options, options);

	var OS = {
		Win: { Description: 'Digital Download for Windows' },
		Mac: { Description: 'Digital Download for Mac OS X' }
	};

	var codes = [
		{ Products: ['MIK'],                 Win: 50001, Mac: 50002 },
		{ Products: ['PN'],                  Win: 301,   Mac: 302   },
		{ Products: ['Mashup'],              Win: 1200,  Mac: 1202  },
		{ Products: ['MIK', 'PN'],           Win: 70001, Mac: 70002 },
		{ Products: ['MIK', 'Mashup'],       Win: 1210,  Mac: 1212  },
		{ Products: ['PN', 'Mashup'],        Win: 1220,  Mac: 1222  },
		{ Products: ['MIK', 'PN', 'Mashup'], Win: 1230,  Mac: 1232  }
	];

	options.Products = {
		MIK: {
			Name: 'Mixed In Key 5.0',
			Price: 58,
			BannerImage: '/Cloud/shoppingCartTop_MIK.png', //Path to MIK's banner
			Description: 'Analyze your music files and start using harmonic mixing. Award-winning software.'
		},
		PN: {
			Name: 'Platinum Notes 3.0',
			Price: 98,
			BannerImage: 'images/shoppingCartTop_PN.png', //Path to Platinum Notes' banner
			Description: 'Improve your files and give them perfect volume and correct pitch. Remove distortion and clipped peaks. 100% automated and designed for top DJs.'
		},
		Mashup: {
			Name: 'Mashup 1.0',
			Price: 39,
			BannerImage: 'images/shoppingCartTop_Mashup.png', //Path to Mashup's banner
			Description: 'Mix your own mashups in 5 minutes or less.  This is our ultra-fast audio editor, and it works perfectly with Mixed In Key.'
		}
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

	function getProductCode(checked_products) {
		var i, j, code;
		for (i = 0; i < codes.length; i++) {
			code = codes[i];
			if (code.Products.length === checked_products.length) {
				for (j = 0; j < checked_products.length; j++) {
					product = checked_products[j];
					if ($.inArray(product, code.Products) === -1) {
						break;
					}
				}
				if (j == checked_products.length) {
					break;
				}
			}
		}
		return code;
	}

	function getCheckedProducts() {
		var checked_products = [options.Primary_Product];
		$('.bundle_checkbox').each(function () {
			var $checkBox = $(this);
			if ($checkBox.is(':checked')) {
				checked_products.push($checkBox.data('product'));
			}
		});

		return checked_products;
	}

	function onBundleChanged() {
		var code = getProductCode(getCheckedProducts());

		var checkout_params = PRODUCTID_PARAM + (options.OS === OS.Win ? code.Win : code.Mac);

		var cookie_value = getCookie(COOKIE_NAME);
		if (cookie_value) {
			cookie_value = cookie_value.substring('VIP='.length, cookie_value.length);
			checkout_params += AFFILIATE_PARAM + cookie_value;
		}

		$('#paypal_button').attr('href', PAYPAL_LINK + checkout_params);
		$('#googlecheckout_button').attr('href', GOOGLECHECKOUT_LINK + checkout_params);
	}

	function buyNowButtonClicked(os) {
		options.OS = os;

		$('#buyNowTemplate').tmpl(options).lightbox_me({ centered: true, closeClick: false, lightboxSpeed: 150, overlaySpeed: 150, destroyOnClose: true });

		onBundleChanged();
		$('.bundle_checkbox').change(onBundleChanged);
	}

	$(options.Win_Button).click(function (e) {
		buyNowButtonClicked(OS.Win);
		e.preventDefault();
	});

	$(options.Mac_Button).click(function (e) {
		buyNowButtonClicked(OS.Mac);
		e.preventDefault();
	});
};
