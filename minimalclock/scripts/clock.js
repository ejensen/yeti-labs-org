(function() {
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
	updateTime();
	setInterval(updateTime, 1000);
})();