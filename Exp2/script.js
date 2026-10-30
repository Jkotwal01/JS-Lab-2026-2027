// Generate Multiplication Table
document.getElementById("generateBtn").addEventListener("click", function () {
  let number = Number(document.getElementById("numberInput").value);
  let range = Number(document.getElementById("rangeInput").value);

  let output = "";

  for (let i = 1; i <= range; i++) {
    output += number + " x " + i + " = " + number * i + "<br>";
  }

  document.getElementById("result").innerHTML = output;
});

// Reset
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("numberInput").value = "";
  document.getElementById("rangeInput").value = "";
  document.getElementById("result").innerHTML = "";
});
