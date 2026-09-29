document.getElementById("generateBtn").addEventListener("click", function () {
  let number = parseInt(document.getElementById("numberInput").value);
  let range = parseInt(document.getElementById("rangeInput").value);

  let output = "";

  for (let i = 1; i <= range; i++) {
    output += `
        <div style="padding:8px 12px;
                    margin:6px 0;
                    background:#eaf4ff;
                    border-left:5px solid #007bff;
                    border-radius:5px;">
            ${number} × ${i} = <span style="color:#e74c3c;">${number * i}</span>
        </div>`;
  }

  document.getElementById("result").innerHTML = output;
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("numberInput").value = "";
  document.getElementById("rangeInput").value = "";
  document.getElementById("result").innerHTML = "";
});
