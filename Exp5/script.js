var countdown;

function startCountdown() {
  let date = document.getElementById("endDate").value;
  let time = document.getElementById("endTime").value;

  // Check input
  if (date == "" || time == "") {
    document.getElementById("countdown").innerHTML =
      "Please select date and time";
    return;
  }

  // Create deadline
  let deadline = new Date(date + "T" + time).getTime();

  // Stop previous timer
  clearInterval(countdown);

  // Update every second
  countdown = setInterval(function () {
    let now = new Date().getTime();
    let remainingTime = deadline - now;

    // Check if countdown is over
    if (remainingTime <= 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Expired";
      return;
    }

    // Calculate days, hours, minutes and seconds
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("countdown").innerHTML =
      days +
      " Days " +
      hours +
      " Hours " +
      minutes +
      " Minutes " +
      seconds +
      " Seconds";
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdown);

  document.getElementById("endDate").value = "";
  document.getElementById("endTime").value = "";

  document.getElementById("countdown").innerHTML =
    "00 Days 00 Hours 00 Minutes 00 Seconds";
}
