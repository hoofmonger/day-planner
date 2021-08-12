var currentDay = moment().format('dddd') + "" + moment().format('MMMM Do YYYY');
var currentClockTime = moment().format('h:mm:ss a');


var interval = setInterval(function() {
    var rightNow = moment()
    $('#currentDay').html(rightNow.format("YYYY MMMM DD") + " "
    + rightNow.format("dddd")
    .substring(0,3).toLocaleUpperCase());
    $("#currentDay"). html(currentDay + " " + rightNow.format("hh:mm:ss A"));
}, 1000);

var nineHundredHours = $("#0900hours")
var tenHundredHours = $("#1000hours")
var elevenHundredHours = $("#1100hours")
var tweleveHundredHours = $("#1200hours")
var thirteenHundredHours = $("#1300hours")
var fourteenHundredHours = $("#1400hours")
var fifteenHundredHours = $("#1500hours")
var sixteenHundredHours = $("#1600hours")
var seventeenHundredHours = $("#1700hours")
var eighteenHundredHours = $("#1800hours")
var saveButtons = $(".fas")

//when a button is clicked, find the value of text area in question, save to local storage


// set this.parent = var to save to local storage 
    //get save buttons, use "for each" function, add click listener, within click listener, go to parent div, text area child in parent div, select the text value, and save to local storage

saveButtons.on("click", function (){
   
    $(this).parent().localStorage.appendTo(key("0900hours"))
})

function initiatePage() {
    var initiate0900hours = (localStorage.getItem("0900hours")) || " csdfadfsadf";
    nineHundredHours.val(initiate0900hours);

    var initiate1000hours = JSON.parse(localStorage.getItem("1000hours"));
    nineHundredHours.val(initiate0900hours);

//     var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
//     nineHundredHours.val(initiate0900hours);

//     var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
//     nineHundredHours.val(initiate0900hours);

//     var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
//     nineHundredHours.val(initiate0900hours);

//     var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
//     nineHundredHours.val(initiate0900hours);

//     var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
//     nineHundredHours.val(initiate0900hours);

//     var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
//     nineHundredHours.val(initiate0900hours);

//     var initiate0900hours = JSON.parse(localStorage.getItem("0900 am"));
//     nineHundredHours.val(initiate0900hours);
 }

 initiatePage()