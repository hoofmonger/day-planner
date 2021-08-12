var currentDay = moment().format('dddd') + "" + moment().format('MMMM Do YYYY');
var currentClockTime = moment().format('h:mm:ss a');


var interval = setInterval(function() {
    var rightNow = moment()
    $('#currentDay').html(momentNow.format("YYYY MMMM DD") + " "
    + momentNow.format("dddd")
    .substring(0,3).toLocaleUpperCase());
    $("#currentDay"). html(currentDay + " " + momentNow.format("hh:mm:ss A"));
}, 1000);

var nineHundredHours = document.querySelector("#0900hours")
var tenHundredHours = document.querySelector("#1000hours")
var elevenHundredHours = document.querySelector("#1100hours")
var tweleveHundredHours = document.querySelector("#1200hours")
var thirteenHundredHours = document.querySelector("#1300hours")
var fourteenHundredHours = document.querySelector("#1400hours")
var fifteenHundredHours = document.querySelector("#1500hours")
var sixteenHundredHours = document.querySelector("#1600hours")
var seventeenHundredHours = document.querySelector("#1700hours")
var eighteenHundredHours = document.querySelector("#1800hours")

function initiatePage() {
    var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
    nineHundredHours.val(initiate0900hours);

    var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
    nineHundredHours.val(initiate0900hours);

    var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
    nineHundredHours.val(initiate0900hours);

    var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
    nineHundredHours.val(initiate0900hours);

    var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
    nineHundredHours.val(initiate0900hours);

    var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
    nineHundredHours.val(initiate0900hours);

    var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
    nineHundredHours.val(initiate0900hours);

    var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
    nineHundredHours.val(initiate0900hours);

    var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
    nineHundredHours.val(initiate0900hours);
}