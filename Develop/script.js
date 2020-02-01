// DOM Elements

var $currentDay = $("#currentDay");
var $saveBtn = $(".saveBtn");

// Set Dates

// Current Time

var currentHour = moment().hours();
function clock() {
	var now = moment().format("MMMM Do YYYY, h:mm:ss a");
	$currentDay.html(now);
	console.log(now);
}

clock();

// $(document).ready(function() {
//     var interval = setInterval(function() {
//         var momentNow = moment();
//         $('#date-part').html(momentNow.format('YYYY MMMM DD') + ' '
//                             + momentNow.format('dddd')
//                              .substring(0,3).toUpperCase());
//         $('#time-part').html(momentNow.format('A hh:mm:ss'));
//     }, 100);

//     $('#stop-interval').on('click', function() {
//         clearInterval(interval);
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
