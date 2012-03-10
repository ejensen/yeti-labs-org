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
			previewArea.removeEventListener(startClock);
		}
	}

	previewArea.addEventListener('click', startClock);
})();