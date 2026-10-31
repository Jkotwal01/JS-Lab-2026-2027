let currentArray = [];

// 1. Generate Array
function generateArray() {
  let length = parseInt(document.getElementById("arrayLength").value);

  if (isNaN(length) || length <= 0) {
    updateOutput("Enter a valid positive array length.");
    return;
  }

  currentArray = [];

  for (let i = 1; i <= length; i++) {
    currentArray.push(i);
  }

  updateOutput("Array generated successfully.");
}

// Display Array and Result
function updateOutput(message) {
  document.getElementById("outputDisplay").innerHTML =
    "Current Array: [" +
    currentArray.join(", ") +
    "]<br><br>Result: " +
    message;
}

// 2. Remove Element Using Array Methods
function removeElementWithMethod() {
  let element = parseInt(document.getElementById("deleteInput").value);

  let index = currentArray.indexOf(element);

  if (isNaN(element)) {
    updateOutput("Enter a valid element to delete.");
  } else if (index != -1) {
    currentArray.splice(index, 1);
    updateOutput("Element removed using splice().");
  } else {
    updateOutput("Element not found.");
  }
}

// 3. Remove Element Without Array Methods
function removeElementWithoutMethod() {
  let element = parseInt(document.getElementById("deleteInput").value);
  let newArray = [];
  let found = false;

  if (isNaN(element)) {
    updateOutput("Enter a valid element to delete.");
    return;
  }

  for (let i = 0; i < currentArray.length; i++) {
    if (currentArray[i] == element && !found) {
      found = true;
    } else {
      newArray[newArray.length] = currentArray[i];
    }
  }

  if (found) {
    currentArray = newArray;
    updateOutput("Element removed using loop.");
  } else {
    updateOutput("Element not found.");
  }
}

// 4. Search Using Array Method
function checkContainsWithMethod() {
  let element = parseInt(document.getElementById("searchInput").value);

  if (isNaN(element)) {
    updateOutput("Enter a valid element to search.");
    return;
  }

  if (currentArray.includes(element)) {
    updateOutput("Element found using includes().");
  } else {
    updateOutput("Element not found.");
  }
}

// 5. Search Without Array Method
function checkContainsWithoutMethod() {
  let element = parseInt(document.getElementById("searchInput").value);
  let found = false;

  if (isNaN(element)) {
    updateOutput("Enter a valid element to search.");
    return;
  }

  for (let i = 0; i < currentArray.length; i++) {
    if (currentArray[i] == element) {
      found = true;
      break;
    }
  }

  if (found) {
    updateOutput("Element found using loop.");
  } else {
    updateOutput("Element not found.");
  }
}

// 6. Empty Array
function emptyArray() {
  currentArray = [];
  updateOutput("Array emptied successfully.");
}

// 7. Reset All
function resetAll() {
  currentArray = [];

  document.getElementById("arrayLength").value = "";
  document.getElementById("deleteInput").value = "";
  document.getElementById("searchInput").value = "";

  updateOutput("");
}
