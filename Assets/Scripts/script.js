var arrIndex = [1,2,3,4,5]
var arrName = ["Jani","Hege","Stale","Kai Jim","Borge"]

arrName.splice(2,1,"Lene");
var result = {};
arrIndex.forEach((key, i) => result[key] = arrName[i]);
console.log(result);

$(document).ready(function () {
  let currentTime = parseInt(moment().format("HH"));
  let workDayData = {
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  }
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

  //   $(".saveBtn").click(function(){
  //     console.log("it worked!");
  //     localStorage.setItem("TimeData", $(this).parent().prev().val())
  //     // $(this).parent().prev().val();
  // })
    $(".container").on("click", saveHandler)

    function saveHandler(event) {
      event.preventDefault();

      if (event.target.matches("button")) {

      }
    }
  });



  function dateTimeSeconds() {
    let todayDateTime = moment().format("dddd, MMMM Do, hh:mm:ss A");
    $("#currentDay").text(todayDateTime);
    setInterval(dateTimeSeconds, 500);
  }
});
