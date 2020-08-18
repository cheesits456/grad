var countDownDate = new Date("June 22, 2018 17:00:00").getTime();
setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	if (distance < 0) {
		document.getElementById("title").innerHTML = "Time since Graduation";
	} else {
		document.getElementById("title").innerHTML = "Time until Graduation";
	}
	var years = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25)))
	var days = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24)));
	var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
	var minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
	var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
	document.getElementById("demo").innerHTML = years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);