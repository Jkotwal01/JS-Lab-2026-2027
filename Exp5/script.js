var countdown;

// Start the countdown
function startCountdown() {
  // 1) Set a Valid End Date
  // Get date and time entered from frontend
  var date = document.getElementById("endDate").value;
  var time = document.getElementById("endTime").value;

  // Check whether date and time are entered
  if (date == "" || time == "") {
    document.getElementById("countdown").innerHTML =
      "Please select date and time";
    return;
  }

  // Combine date and time
  var deadline = new Date(date + " " + time).getTime();

  // Clear previous countdown if any
  clearInterval(countdown);

  // 2) Calculate Remaining Time
  countdown = setInterval(function () {
    // Current date and time
    var now = new Date().getTime();

    // Calculate remaining time
    var remainingTime = deadline - now;

    // Calculate days
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    // Calculate hours
    var hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    // Calculate minutes
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    // Calculate seconds
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // 3) Output the result
    document.getElementById("countdown").innerHTML =
      days +
      " Days " +
      hours +
      " Hours " +
      minutes +
      " Minutes " +
      seconds +
      " Seconds";

    // 4) Write some text if countdown is over
    if (remainingTime < 0) {
      clearInterval(countdown);

      document.getElementById("countdown").innerHTML = "Expired";
    }
  }, 1000);
}
