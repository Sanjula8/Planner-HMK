// DOM Elements

var $currentDay = $("#currentDay");
$(".clearBtn").html("Clear All");
var $saveBtn = $(".saveBtn");
// var $hour9 = $("#hour-9");
// var $hour10 = $("#hour-10");
// var $hour11 = $("#hour-11");
// var $hour12 = $("#hour-12");
// var $hour13 = $("#hour-13");
// var $hour14 = $("#hour-14");
// var $hour15 = $("#hour-15");
// var $hour16 = $("#hour-16");
// var $hour17 = $("#hour-17");

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
// Store Data
$(".saveBtn").on("click", function(e) {
	e.preventDefault();
	var input = $(this)
		.siblings(".description")
		.val();
	var key = $(this)
		.siblings(".description")
		.attr("id");
	localStorage.setItem(key, input);
	console.log(input);
});

lastSave();

function lastSave() {
	for (let index = 1; index < 18; index++) {
		var key = "hour-" + index;
		var savedThing = localStorage.getItem(key);
		var $hour = $("#hour-" + index);
		$hour.val(savedThing);
	}
}

// Add Past, Present, Future based on the current time.
// Targeting the description for all classes and comparing to currentHour.
function hourUpdater() {
	$(".time").each(function() {
		var textArea = $(this).children(".description");
		var hour = parseInt(textArea.attr("id").split("-")[1]);
		if (hour < currentHour) {
			textArea.addClass("past");
		} else if (hour === currentHour) {
			textArea.removeClass("past");
			textArea.addClass("present");
		} else {
			textArea.removeClass("past");
			textArea.removeClass("present");
			textArea.addClass("future");
		}
	});
}
// Call function
hourUpdater();

// Clear All
// Targeting description again to clear text inside.
$(".clearBtn").on("click", function() {
	$(".time").each(function() {
		var textArea = $(this).children(".description");
		textArea.val("");
	});
	localStorage.clear();
});

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
