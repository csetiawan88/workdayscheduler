// Display the current date in the header of the page.
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

$(function () {
  // Apply Past, Present and Future and their color coded.
  var cal = new Date();
  var currentHour = cal.getHours();
  console.log(currentHour);

  $("textarea").each(function () {
    var $this = $(this);
    var id = parseInt($this.attr("id"));

    if (id < currentHour) {
      $(this).addClass("past");
    }
    if (id > currentHour) {
      $(this).addClass("future");
    }
    if (id === currentHour) {
      $(this).addClass("present");
    }
  });

  // Save to local storage

  {
    $(".saveBtn").click(function () {
      var thisValue = $(this).siblings(".description").val();
      console.log(thisValue);

      var timeSlot = $(this).siblings(".description").attr("id");
      console.log(timeSlot);
      localStorage.setItem(timeSlot, thisValue);
    });
  }

  // Call Local Storage to view after refresh the page

  var saved9 = localStorage.getItem("9");
  document.getElementById("9").value = saved9;
  var saved10 = localStorage.getItem("10");
  document.getElementById("10").value = saved10;
  var saved11 = localStorage.getItem("11");
  document.getElementById("11").value = saved11;
  var saved12 = localStorage.getItem("12");
  document.getElementById("12").value = saved12;
  var saved13 = localStorage.getItem("13");
  document.getElementById("13").value = saved13;
  var saved14 = localStorage.getItem("14");
  document.getElementById("14").value = saved14;
  var saved15 = localStorage.getItem("15");
  document.getElementById("15").value = saved15;
  var saved16 = localStorage.getItem("16");
  document.getElementById("16").value = saved16;
  var saved17 = localStorage.getItem("17");
  document.getElementById("17").value = saved17;
});

// Add message after click save button (2 seconds display): . Saved to local storage

function saveTask() {
  var message1 = `Saved to local storage`;
  document.getElementById("textBox").innerHTML = message1;

  setTimeout(() => {
    document.getElementById("textBox").innerHTML = "";
  }, 2000);
  console.log(message1);
}
