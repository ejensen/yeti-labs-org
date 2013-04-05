(function() {
	var started = false;
	var preview = document.getElementById('preview');

	function toTwoDigitString(number) {
		return (number < 10 ? '0' : '') + number;
	}

	function updateTime() {
		var time = new Date(),
			hours = toTwoDigitString(time.getHours()),
			minutes = toTwoDigitString(time.getMinutes()),
			seconds = toTwoDigitString(time.getSeconds());

		var timeString = hours + ':' + minutes + ':' + seconds;

		document.getElementById('time').innerHTML = timeString;
	}

	function startClock() {
		if (!started) {
			started = true;			
			updateTime();
			setInterval(updateTime, 1000);
			
			document.getElementById('screen').style.visibility = 'visible';	
			preview.style.cursor = 'auto';

			if (preview.removeEventListener) {
				preview.removeEventListener('click', startClock); 
			} else if (preview.detachEvent)  {
				preview.detachEvent('click', startClock);
			}
		}
	}
	
	if (preview.addEventListener) {
		preview.addEventListener('click', startClock, false); 
	} else if (preview.attachEvent)  {
		preview.attachEvent('onclick', startClock);
	}
})();
