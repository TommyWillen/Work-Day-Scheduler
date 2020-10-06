// variable for the text area information (timeData variable) as the value and timeIndex as the key
let timeIndexData = {};
// initial pull of the stored stringified object from local storage
let storedTimeData = localStorage.getItem("storedTimeInfo");
// variable to store which time the text area is located
let timeIndex;
// variable to store the values of the text areas
let timeData;
// if there is no stored data in local storage, it will set the local initial values for time Index and set time Data to an array of empty strings and link them together to create the timeindex data object and then store the object of empty strings into local storage
if (!storedTimeData) {
  timeIndex = $(".hour")
    .map(function () {
      return $(this).attr("value");
    })
    .get();
  // console.log(timeIndex);

  timeData = $(".time-data")
    .map(function () {
      return $(this).text();
    })
    .get();
  // console.log(timeData);

  timeIndex.forEach((key, i) => (timeIndexData[key] = timeData[i]));
  // console.log(timeIndexData);

  storedTimeData = JSON.stringify(timeIndexData);
  localStorage.setItem("storedTimeInfo", storedTimeData);
  // console.log(storedTimeData);
// console.log(timeIndexData);
// else it would pull the stored time data and set the parsed string as the timeIndexData array and set the timeIndex as the object keys and timeData as the object values
} else {
  timeIndexData = JSON.parse(storedTimeData);
  // console.log(storedTimeData);
  // console.log(timeIndexData);
  timeIndex = Object.keys(timeIndexData);
  // console.log("timeIndex: " + timeIndex);
  timeData = Object.values(timeIndexData);
  // console.log("timeData: " + timeData);
}

// console.log($("textarea").innerHTML.toArray());
// This uses the jquery text method to push the timeData array into the textareas at the correct locations
$("textarea").text(function(index){
  return timeData[index];
})

// THis function sets the current day and displays it below the title.
function dateTimeSeconds() {
  let todayDateTime = moment().format("dddd, MMMM Do");
  $("#currentDay").text(todayDateTime);
}

dateTimeSeconds();

// This variable is used to see what the current hour is in military time
let currentTime = parseInt(moment().format("HH"));


// console.log(currentTime);
// this .each method compares the current time with the time value for each time block. If the time block value is less than the current hour the text area is set to gray. Red is set if it is the same value, and green if the block value is greater
$(".hour").each(function () {
  if (parseInt($(this).attr("value")) === currentTime) {
    $(this).next().removeClass("past");
    $(this).next().removeClass("future");
    $(this).next().removeClass("present");
    $(this).next().addClass("present");
  } else if (parseInt($(this).attr("value")) > currentTime) {
    $(this).next().removeClass("past");
    $(this).next().removeClass("future");
    $(this).next().removeClass("present");
    $(this).next().addClass("future");
  } else {
    $(this).next().removeClass("past");
    $(this).next().removeClass("future");
    $(this).next().removeClass("present");
    $(this).next().addClass("past");
  }
});


// this eventlistner/handler is set to the save buttons and will add data value to the correct location in the timeData value and then reset the timeIndexData object to hold the new value and then store it in local storage
$(".saveBtn").click(function () {
  // console.log("it worked!");
let textAreaIndex = parseInt($(this).parent().prev().prev().attr("value"))-8;
let textAreaValue = $(this).parent().prev().val();
// console.log(textAreaValue);

timeData.splice(textAreaIndex,1,textAreaValue);
// console.log(timeData);

timeIndex.forEach((key, i) => (timeIndexData[key] = timeData[i]));
  // console.log(timeIndexData);

  storedTimeData = JSON.stringify(timeIndexData);
  localStorage.setItem("storedTimeInfo", storedTimeData);

});

// event listner attahed to the clear button
$(".clearBtn").click(clearAll);
// This function clears local storage and sets timeData to an array of blank strings
function clearAll() {
  localStorage.removeItem("storedTimeInfo");
  // this refreshes the page to reset the textareas to empty strings
  location.reload();
}

// this event listner/handler/variable are about resetting the calendar when the day changes. It looks for mouse movement every 30seconds and clears the storage and refreshes the page when the day changes.
var today = new Date(), lastUpdate;

window.addEventListener( "mousemove", function () {
  var time = new Date();
  // If we haven't checked yet, or if it's been more than 30 seconds since the last check
  if ( !lastUpdate || ( time.getTime() - lastUpdate.getTime() ) > 30000 ) {
    // Set the last time we checked, and then check if the date has changed.
    lastUpdate = time
    if ( time.getDate() !== today.getDate() ) {
      // If the date has changed, set the date to the new date, and refresh stuff.
      today = time;

      clearAll();
    }
  }
} )