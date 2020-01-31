// DOM Elements
var $currentDay = $("#currentDay");

// Set Dates

// Current Time
var currentHour = moment().hours();
function clock() {
	var now = moment().format("MMMM Do YYYY, h:mm:ss a");
	$currentDay.html(now);
}

clock();
// Set Time Increments

// Make past events grayed out

// Make Current day Red

// Make Upcoming Time Green

// Set Time Thingy
