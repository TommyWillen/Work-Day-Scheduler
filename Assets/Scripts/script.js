let timeIndexData = {};
let storedTimeData = localStorage.getItem("storedTimeInfo");
let timeIndex;
let timeData;
if (!storedTimeData) {
  timeIndex = $(".hour")
    .map(function () {
      return $(this).attr("value");
    })
    .get();
  console.log(timeIndex);

  timeData = $(".time-data")
    .map(function () {
      return $(this).text();
    })
    .get();
  console.log(timeData);

  timeIndex.forEach((key, i) => (timeIndexData[key] = timeData[i]));
  console.log(timeIndexData);

  storedTimeData = JSON.stringify(timeIndexData);
  localStorage.setItem("storedTimeInfo", storedTimeData);
  console.log(storedTimeData);
console.log(timeIndexData);
} else {
  timeIndexData = JSON.parse(storedTimeData);
  console.log(storedTimeData);
  console.log(timeIndexData);
  timeIndex = Object.keys(timeIndexData);
  console.log("timeIndex: " + timeIndex);
  timeData = Object.values(timeIndexData);
  console.log("timeData: " + timeData);
}

// console.log($("textarea").innerHTML.toArray());

$("textarea").text(function(index){
  return timeData[index];
})
// for (let i = 0; i < timeData.length; i++) {

// }

function dateTimeSeconds() {
  let todayDateTime = moment().format("dddd, MMMM Do");
  $("#currentDay").text(todayDateTime);
  // setInterval(dateTimeSeconds, 500);
}
let currentTime = parseInt(moment().format("HH"));

dateTimeSeconds();

let hourBlockTimes = $(".hour");
console.log(currentTime);

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



$(".saveBtn").click(function () {
  console.log("it worked!");
let textAreaIndex = parseInt($(this).parent().prev().prev().attr("value"))-8;
let textAreaValue = $(this).parent().prev().val();
console.log(textAreaValue);

timeData.splice(textAreaIndex,1,textAreaValue);
console.log(timeData);

timeIndex.forEach((key, i) => (timeIndexData[key] = timeData[i]));
  console.log(timeIndexData);

  storedTimeData = JSON.stringify(timeIndexData);
  localStorage.setItem("storedTimeInfo", storedTimeData);
  // localStorage.setItem("TimeData", $(this).parent().prev().val())
  // $(this).parent().prev().val();
});

$(".clearBtn").click(clearAll);

function clearAll() {
  localStorage.removeItem("storedTimeInfo");
  timeData = ["","","","","","","","","",""]
  $("textarea").text(function(index){
    return timeData[index];
  });
  location.reload();
}

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
      location.reload();
    }
  }
} )