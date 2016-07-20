// Rio start date in milliseconds since Jan 1, 1970
var rioStart = new Date('August 5, 2016 19:00').getTime();

// 2016 presidential election date in milliseconds since Jan 1, 1970
var elecStart = new Date('November 8, 2016').getTime();

// custom date in milliseconds since Jan 1, 1970
// var custStart = new Date(document.getElementById('custDate')).getTime();

// various time units in seconds
var secondsInAMinute = 60;
var secondsInAnHour = secondsInAMinute * 60;
var secondsInADay = secondsInAnHour * 24;
var secondsInAWeek = secondsInADay * 7;

// var countDownTimer = document.getElementById('countdown-timer-1')
// console.log(countDownTimer.querySelector('.weeks-number')); // will grab first occurence of 'weeks-number' class

// create variables for countdown-timer-1 elements
var secondsDigit1 = (document.getElementsByClassName('seconds-number')[0]);
var minutesDigit1 = (document.getElementsByClassName('mins-number')[0]);
var hoursDigit1 = (document.getElementsByClassName('hours-number')[0]);
var daysDigit1 = (document.getElementsByClassName('days-number')[0]);
var weeksDigit1 = (document.getElementsByClassName('weeks-number')[0]);

// create variables for countdown-timer-2 elements
var secondsDigit2 = (document.getElementsByClassName('seconds-number')[1]);
var minutesDigit2 = (document.getElementsByClassName('mins-number')[1]);
var hoursDigit2 = (document.getElementsByClassName('hours-number')[1]);
var daysDigit2 = (document.getElementsByClassName('days-number')[1]);
var weeksDigit2 = (document.getElementsByClassName('weeks-number')[1]);
// console.log(document.getElementsByTagName('span')[0]);

function updateCounter(){
	// get the current time in milliseconds since Jan 1, 1970 (UNIX epoch)
	var now = Date.now();
	// time in seconds between the current moment and the start of Rio 2016
	var getTimeTilRio = (rioStart - now) / 1000;
	// time in seconds between the current moment and 2016 presidential election date
	var getTimeTilElec = (elecStart - now) / 1000;

	// calculate values of elements for countdown-timer-1
	var seconds1 = Math.floor(getTimeTilRio % 60);
	var minutes1 = Math.floor((getTimeTilRio / secondsInAMinute) % 60);
	var hours1 = Math.floor((getTimeTilRio / secondsInAnHour) % 24);
	var days1 = Math.floor((getTimeTilRio / secondsInADay) % 7);
	var weeks1 = Math.floor((getTimeTilRio / secondsInAWeek) % 52);

	// calculate values of elements for countdown-timer-2
	var seconds2 = Math.floor(getTimeTilElec % 60);
	var minutes2 = Math.floor((getTimeTilElec / secondsInAMinute) % 60);
	var hours2 = Math.floor((getTimeTilElec / secondsInAnHour) % 24);
	var days2 = Math.floor((getTimeTilElec / secondsInADay) % 7);
	var weeks2 = Math.floor((getTimeTilElec / secondsInAWeek) % 52);

	// update values of elements in countdown-timer-1
	secondsDigit1.innerHTML = seconds1;
	minutesDigit1.innerHTML = minutes1;
	hoursDigit1.innerHTML = hours1;
	daysDigit1.innerHTML = days1;
	weeksDigit1.innerHTML = weeks1;

	// update values of elements in countdown-timer-2
	secondsDigit2.innerHTML = seconds2;
	minutesDigit2.innerHTML = minutes2;
	hoursDigit2.innerHTML = hours2;
	daysDigit2.innerHTML = days2;
	weeksDigit2.innerHTML = weeks2;
}

// initial values for counter displays
var count1Display = "block";
var count2Display = "none";
var count3Display = "none";

// set initial counter displays
document.getElementById("countdown-timer-1").style.display = count1Display;
document.getElementById("countdown-timer-2").style.display = count2Display;
document.getElementById("countdown-timer-3").style.display = count3Display;

// variable to target counter select button
var selectBtn = document.getElementById("select-button");

selectBtn.onclick = function selectCounter (){
	if (count1Display == "block"){
		count1Display = "none";
		count2Display = "block";
		document.getElementById("select-button").innerHTML = "Show Olympics Countdown";
		document.getElementById("title").innerHTML = "Countdown to Election Day - 2016 Election";
		document.getElementById("countdown-timer-1").style.display = count1Display;
		document.getElementById("countdown-timer-2").style.display = count2Display;
	}else{
		count1Display = "block";
		count2Display = "none";
		document.getElementById("select-button").innerHTML = "Show Election Countdown";
		document.getElementById("title").innerHTML = "Countdown to Rio - 2016 Olympics";
		document.getElementById("countdown-timer-1").style.display = count1Display;
		document.getElementById("countdown-timer-2").style.display = count2Display;
	}
}

// variable to target pause button
var pauseBtn = document.getElementById("pause-button");

var timerState = "running";

pauseBtn.onclick = function stopStart(){
	if (timerState === "running"){
		timerState = "paused";
		clearInterval(timer);
		document.getElementById("pause-button").innerHTML = "Resume";
	}else{
		timerState = "running";
		timer = setInterval(updateCounter, 1000);
		document.getElementById("pause-button").innerHTML = "Pause";
	}
}

// call the setInterval function which will run our update function every 1000 milliseconds
var timer = setInterval(updateCounter, 1000);