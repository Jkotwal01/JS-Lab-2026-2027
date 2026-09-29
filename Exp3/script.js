// Helper helper function to capture input values safely
function getMainInput() {
  return document.getElementById("mainString").value;
}

// Helper function to update the web UI box
function updateOutput(message) {
  document.getElementById("outputDisplay").innerText = message;
}

// 1. Reverse string logic (Using your loop design)
function reverseString() {
  const str = getMainInput();
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  updateOutput(reversed);
  return reversed;
}

// 2. Replace character logic
function replaceCharacter() {
  const str = getMainInput();
  const fromChar = document.getElementById("fromChar").value;
  const toChar = document.getElementById("toChar").value;

  if (!fromChar) {
    updateOutput("Error: Specify target character to replace.");
    return;
  }

  const result = str.replaceAll(fromChar, toChar);
  updateOutput(result);
}

// 3. Check Palindrome logic
function checkPalindrome() {
  const str = getMainInput();

  if (!str.trim()) {
    updateOutput("Error: Please enter a string first.");
    return;
  }

  // Clean up string: convert to lowercase and remove spaces/punctuation for a true check
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string
  let reversedStr = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversedStr += cleanStr[i];
  }

  // Compare original and reversed values
  if (cleanStr === reversedStr) {
    updateOutput(`Yes, "${str}" is a palindrome!`);
  } else {
    updateOutput(`No, "${str}" is not a palindrome.`);
  }
}

function resetAll() {
  document.getElementById("mainString").value = "";
  document.getElementById("fromChar").value = "";
  document.getElementById("toChar").value = "";
  document.getElementById("outputDisplay").innerText = "Result will appear here...";
}
