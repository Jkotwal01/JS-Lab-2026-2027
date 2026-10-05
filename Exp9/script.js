document.getElementById("studentForm").addEventListener("submit", function(event) {
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

    // Check each required field separately
    if (name === "") errors.push("Name is required.");
    if (address === "") errors.push("Address is required.");
    if (city === "") errors.push("City is required.");
    if (state === "") errors.push("State is required.");
    if (gender === null) errors.push("Please select a gender.");
    if (mobile === "") errors.push("Mobile Number is required.");
    if (email === "") errors.push("Email ID is required.");

    // Name validation
    let namePattern = /^[A-Za-z ]+$/;
    if (name !== "" && !namePattern.test(name)) {
        errors.push("Invalid Name. Name should contain only alphabets.");
    }

    // Mobile validation
    let mobilePattern = /^[0-9]{10}$/;
    if (mobile !== "" && !mobilePattern.test(mobile)) {
        errors.push("Invalid Mobile Number. Enter exactly 10 digits.");
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== "" && !emailPattern.test(email)) {
        errors.push("Invalid Email ID. Please enter a valid email.");
    }

    if (errors.length > 0) {
        message.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
        message.style.color = "red";
        message.className = "error";
        return;
    }

    // Successful submission
    message.innerHTML = "Congratulations! Welcome, " + name + "!";
    message.style.color = "green";
    message.className = "success";
});
