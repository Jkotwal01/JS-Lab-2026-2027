// 1. Reverse String
function reverseString() {
  let str = document.getElementById("mainString").value;
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }

  document.getElementById("output").innerHTML = rev;
}

// 2. Replace Character
function replaceCharacter() {
  let str = document.getElementById("mainString").value;
  let oldChar = document.getElementById("fromChar").value;
  let newChar = document.getElementById("toChar").value;

  if (oldChar == "" || newChar == "") {
    document.getElementById("output").innerHTML =
      "Enter the old and new character to replace.";
    return;
  }

  let result = str.replaceAll(oldChar, newChar);
  document.getElementById("output").innerHTML = result;
}

// 3. Check Palindrome
function checkPalindrome() {
  let str = document.getElementById("mainString").value;

  if (str.trim() == "") {
    document.getElementById("output").innerHTML = "Please enter a string.";
    return;
  }

  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }

  if (str.toLowerCase() == rev.toLowerCase()) {
    document.getElementById("output").innerHTML = "It is a Palindrome.";
  } else {
    document.getElementById("output").innerHTML = "It is not a Palindrome.";
  }
}

// 4. Reset
function resetAll() {
  document.getElementById("mainString").value = "";
  document.getElementById("fromChar").value = "";
  document.getElementById("toChar").value = "";
  document.getElementById("output").innerHTML = "Result will appear here.";
}
