// Method 1: Using Strict Equality
function compareWithStrictEquality() {
  let str1 = document.getElementById("stringOne").value;
  let str2 = document.getElementById("stringTwo").value;

  if (str1 === str2) {
    document.getElementById("outputDisplay").innerHTML =
      "Both strings are identical.";
  } else {
    document.getElementById("outputDisplay").innerHTML =
      "Strings are different.";
  }
}

// Method 2: Using Length and Loop
function compareWithLengthLoop() {
  let str1 = document.getElementById("stringOne").value;
  let str2 = document.getElementById("stringTwo").value;

  if (str1.length !== str2.length) {
    document.getElementById("outputDisplay").innerHTML =
      "Strings are different.";
    return;
  }

  let match = true;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      match = false;
      break;
    }
  }

  if (match) {
    document.getElementById("outputDisplay").innerHTML =
      "Both strings are identical.";
  } else {
    document.getElementById("outputDisplay").innerHTML =
      "Strings are different.";
  }
}

// Method 3: Using localeCompare()
function compareWithLocaleCompare() {
  let str1 = document.getElementById("stringOne").value;
  let str2 = document.getElementById("stringTwo").value;

  if (str1.localeCompare(str2) === 0) {
    document.getElementById("outputDisplay").innerHTML =
      "Both strings are identical.";
  } else {
    document.getElementById("outputDisplay").innerHTML =
      "Strings are different.";
  }
}

// Reset
function resetAll() {
  document.getElementById("stringOne").value = "";
  document.getElementById("stringTwo").value = "";
  document.getElementById("outputDisplay").innerHTML =
    "Result will appear here.";
}
