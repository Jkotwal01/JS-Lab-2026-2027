document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();

    let gender = document.querySelector('input[name="gender"]:checked');

    let message = document.getElementById("message");
    let errors = [];

    // Check empty fields
    if (name == "") errors.push("Name is required.");
    if (address == "") errors.push("Address is required.");
    if (city == "") errors.push("City is required.");
    if (state == "") errors.push("State is required.");
    if (gender == null) errors.push("Please select gender.");
    if (mobile == "") errors.push("Mobile number is required.");
    if (email == "") errors.push("Email is required.");

    // Validate name
    let namePattern = /^[A-Za-z ]+$/;

    if (name != "" && !namePattern.test(name)) {
      errors.push("Name must contain only alphabets and spaces.");
    }

    // Validate mobile number
    let mobilePattern = /^[0-9]{10}$/;

    if (mobile != "" && !mobilePattern.test(mobile)) {
      errors.push("Mobile number must contain exactly 10 digits.");
    }

    // Validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email != "" && !emailPattern.test(email)) {
      errors.push("Enter a valid email address.");
    }

    // Display errors
    if (errors.length > 0) {
      message.innerHTML = errors.join("<br>");
      message.style.color = "red";
      return;
    }

    // Successful submission
    message.innerHTML = "Congratulations! Welcome, " + name + "!";
    message.style.color = "green";
  });
