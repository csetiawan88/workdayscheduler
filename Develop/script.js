// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D"));



$(function (saveTask) {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var cal = new Date(); // init date and time
  var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock
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

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  {


    $('.saveBtn').click(function () {
        var hr9 = document.getElementById('9').value;
        localStorage.setItem('text9', hr9);
        var hr10 = document.getElementById('10').value;
        localStorage.setItem('text10', hr10);
        var hr11 = document.getElementById('11').value;
        localStorage.setItem('text11', hr11);
        var hr12 = document.getElementById('12').value;
        localStorage.setItem('text12', hr12);
        var hr13 = document.getElementById('13').value;
        localStorage.setItem('text13', hr13);
        var hr14 = document.getElementById('14').value;
        localStorage.setItem('text14', hr14);
        var hr15 = document.getElementById('15').value;
        localStorage.setItem('text15', hr15);
        var hr16 = document.getElementById('16').value;
        localStorage.setItem('text16', hr16);
        var hr17 = document.getElementById('17').value;
        localStorage.setItem('text17', hr17);
    });
 }

          var saved9 = localStorage.getItem('text9');
          document.getElementById('9').value = saved9;
          var saved10 = localStorage.getItem('text10');
          document.getElementById('10').value = saved10;
          var saved11 = localStorage.getItem('text11');
          document.getElementById('11').value = saved11;
          var saved12 = localStorage.getItem('text12');
          document.getElementById('12').value = saved12;
          var saved13 = localStorage.getItem('text13');
          document.getElementById('13').value = saved13;
          var saved14 = localStorage.getItem('text14');
          document.getElementById('14').value = saved14;
          var saved15 = localStorage.getItem('text15');
          document.getElementById('15').value = saved15;
          var saved16 = localStorage.getItem('text16');
          document.getElementById('16').value = saved16;
          var saved17 = localStorage.getItem('text17');
          document.getElementById('17').value = saved17;
 
});

// Add message after click save button for 2 seconds: ..... Saved to local storage

          var message = $("<p>");
          message.addClass("col-12");
          message.text(
            `${$(this)} saved to local storage`
          );

          $(".container").before(message);
          setTimeout(() => {
            message.remove();
          }, 1000);

