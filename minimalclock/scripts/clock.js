(function() {
	var started = false;
	var previewArea = document.getElementById('preview-area');

	function updateTime() {
		var time = new Date(),
			hours = time.getHours(),
			minutes = time.getMinutes(),
			seconds = time.getSeconds();

		hours   = (hours   < 10 ? '0' : '') + hours;
		minutes = (minutes < 10 ? '0' : '') + minutes;
		seconds = (seconds < 10 ? '0' : '') + seconds;

		var timeString = hours + ':' + minutes + ':' + seconds;

		document.getElementById('time').innerHTML = timeString;
	}
	
	function startClock() {
		if (!started) {
			started = true;
			document.getElementById('screen').style.display = 'block';
			updateTime();
			setInterval(updateTime, 1000);
			previewArea.style.cursor = 'auto';

			if (previewArea.removeEventListener) {
				previewArea.removeEventListener('click', startClock); 
			} else if (previewArea.detachEvent)  {
				previewArea.detachEvent ('click', startClock);
			}
		}
	}
	
	if (previewArea.addEventListener) {
		previewArea.addEventListener('click', startClock, false); 
	} else if (previewArea.attachEvent)  {
		previewArea.attachEvent('onclick', startClock);
	}
})();