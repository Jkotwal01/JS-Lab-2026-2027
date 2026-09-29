function getInputs() {
  return {
    str1: document.getElementById("stringOne").value,
    str2: document.getElementById("stringTwo").value,
  };
}

function showResult(isMatch, methodName) {
  const outputBox = document.getElementById("outputDisplay");
  if (isMatch) {
    outputBox.innerHTML = `<span style="color: #28a745;">✔ Match!</span> Both strings are identical.<br><small style="color:#666; font-weight:normal;">Method: ${methodName}</small>`;
  } else {
    outputBox.innerHTML = `<span style="color: #dc3545;">✘ Mismatch!</span> The strings do not match.<br><small style="color:#666; font-weight:normal;">Method: ${methodName}</small>`;
  }
}

function compareWithStrictEquality() {
  const { str1, str2 } = getInputs();
  const isMatch = str1 === str2;
  showResult(isMatch, "Strict Equality (===)");
}

function compareWithLengthLoop() {
  const { str1, str2 } = getInputs();

  if (str1.length !== str2.length) {
    showResult(false, "Length Comparison");
    return;
  }

  let isMatch = true;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      isMatch = false;
      break;
    }
  }
  showResult(isMatch, "Length Comparison");
}

function compareWithLocaleCompare() {
  const { str1, str2 } = getInputs();
  const isMatch = str1.localeCompare(str2) === 0;
  showResult(isMatch, "localeCompare()");
}

function resetAll() {
  document.getElementById("stringOne").value = "";
  document.getElementById("stringTwo").value = "";
  document.getElementById("outputDisplay").innerHTML = "Result will appear here...";
}
