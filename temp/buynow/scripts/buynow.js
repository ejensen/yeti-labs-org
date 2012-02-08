$(function () {
	var PAYPAL_LINK = 'https://www.e-junkie.com/ecom/gb.php?on0=Dos0=MIK&c=single&cl=1090&i=';
	var GOOGLECHECKOUT_LINK = 'https://www.e-junkie.com/ecom/gb.php?on0=D&os0=MIK&c=gc&cl=1090&ejc=4&i=';

	var OS = {
		Win: { Description: 'Digital Download for Windows 7 / XP / Vista', Code: 0 },
		Mac: { Description: 'Digital Download for Mac OS X', Code: 2 }
	};

	var MIK = {
		Name: 'Mixed In Key 5.0',
		Price: 58,
		Code: 1100, // Whatever MIK's standalone code is.
		BundleCode: 10,
		BannerImage: 'images/shoppingCartTop_MIK.png',
		Description: 'Mixed In Key is award-winning DJ software that gives you the #1 technique of the world\'s best DJ\'s - harmonic mixing.'
	};

	var PN = {
		Name: 'Platinum Notes 3.0',
		Price: 98,
		Code: 1100, // Whatever PN's standalone code is.
		BundleCode: 20,
		BannerImage: 'images/shoppingCartTop_PN.png',
		Description: 'Platinum Notes improves your files and gives them perfect volume and correct pitch.  It removes distortion and clipped peaks.  100% automated and designed for top DJs.'
	};

	var Mashup = {
		Name: 'Mashup Version 1.0',
		Price: 39,
		Code: 1200,
		BundleCode: 30,
		BannerImage: 'images/shoppingCartTop.png',
		Description: 'We created Mashup software to help you beatmatch tracks and save your results to new MP3 files.'
	};

	var options = {
		Product: Mashup, // Main product.
		Bundles: [MIK, PN] // Choose which bundles to display.
	};

	function onBundleChanged() {
		var code = options.Product.Code + options.OS.Code;
		$('.bundle_checkbox').each(function () {
			var $checkBox = $(this);
			if ($checkBox.is(':checked')) {
				code += parseInt($checkBox.data('code'), 10);
			}
		});

		$('#paypal_button').attr('href', PAYPAL_LINK + code);
		$('#googlecheckout_button').attr('href', GOOGLECHECKOUT_LINK + code);
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