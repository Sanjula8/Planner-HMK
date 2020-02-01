// DOM Elements

var $currentDay = $("#currentDay");
var $saveBtn = $(".saveBtn");
var $hour9 = $("#hour-9");
var $hour10 = $("#hour-10");
var $hour11 = $("#hour-11");
var $hour12 = $("#hour-12");
var $hour13 = $("#hour-13");
var $hour14 = $("#hour-14");
var $hour15 = $("#hour-15");
var $hour16 = $("#hour-16");
var $hour17 = $("#hour-17");

// Set Dates

// Current Time
var currentHour = moment().hours();
function clock() {
	var now = moment().format("MMMM Do YYYY, h:mm:ss A");
	$currentDay.html(now);
	setTimeout(clock, 1000);
	// console.log(now);
}

clock();

// Save To Local Storage

// var saveData = JSON.parse(localStorage.saveData || null || {});

// Store Data
$(".saveBtn").on("click", function(e) {
	e.preventDefault();
	localStorage.setItem("input", JSON.stringify(input));
	var input = $hour9.val();
	console.log(input);
});
// lastSave();

// function lastSave() {
// 	var savedThing = JSON.parse(localStorage.getItem("input"));
// 	$hour9.text(savedThing);
// }

// Clear All
// $(".clearBtn").on("click", function() {

//     )}

// Set Time Increments

// Make past events grayed out

// Make Current day Red

// Make Upcoming Time Green

// Set Time Thingy

// var momentObj = moment().startOf("day").add(9, "hour");
// for(var i = 9; i<17; i++)
// {
// console.log(momentObj.add(1, "hour").format(" hh:mm A"))
// }

// compare Moment hour to current hour.
