// Display the current date in the header of the page.

var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

$(function () {
  var cal = new Date();
  var currentHour = cal.getHours();
  console.log(currentHour);

  // Append time Block to index.html
  for (let i = 9; i < 18; i++) {
    var nightDay = "";
    var timeNumber = "";
    if (i < 12) {
      nightDay = "AM";
      timeNumber = i;
    } else {
      nightDay = "PM";
      timeNumber = i - 12;
    }

    if (i === 12) {
      timeNumber = "12";
    }

    $("#timeSection").append(
      `<div id="hour-${i}" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">${timeNumber} ${nightDay}</div>
        <textarea class="col-8 col-md-10 description" rows="3" id="${i}"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`
    );
  }

  // Apply Past, Present and Future and their color coded.

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

      saveTask();
    });
  }

  // Call Local Storage to view after refresh the page
  for (let i = 9; i < 18; i++) {
    console.log(i);
    var saved = localStorage.getItem(i);
    // document.getElementById(i).value = saved9; // Javascript
    $("#" + i).text(saved); // Jquery
  }
});

// Add message after click save button (2 seconds display): . Saved to local storage

function saveTask() {
  var message1 = `Saved to local storage`;
  // document.getElementById("textBox").innerHTML = message1; // Javascript
  $("#textBox").text(message1); // Jquery

  setTimeout(() => {
    // document.getElementById("textBox").innerHTML = ""; // Javascript
    $("#textBox").text(""); // Jquery
  }, 2000);
  console.log(message1);
}
