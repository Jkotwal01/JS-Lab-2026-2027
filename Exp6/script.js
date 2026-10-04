let currentArray = [];

function generateArray() {
    const length = parseInt(document.getElementById("arrayLength").value);
    if (isNaN(length) || length <= 0) {
        updateOutput("Please enter a valid positive array length.");
        return;
    }
    
    currentArray = [];
    for (let i = 1; i <= length; i++) {
        currentArray.push(i);
    }
    updateOutput("Array generated successfully.");
}

function updateOutput(message) {
    const output = document.getElementById("outputDisplay");
    output.innerHTML = `Current Array: [${currentArray.join(", ")}]<br><br>Result: <span style="color: #0056b3;">${message}</span>`;
}

// 1. Remove Element (With Method)
function removeElementWithMethod() {
    const elToDelete = parseInt(document.getElementById("deleteInput").value);
    if (isNaN(elToDelete)) return updateOutput("Enter a valid element to delete.");
    
    const index = currentArray.indexOf(elToDelete);
    if (index !== -1) {
        currentArray.splice(index, 1);
        updateOutput(`Element ${elToDelete} removed using splice().`);
    } else {
        updateOutput(`Element ${elToDelete} not found in array.`);
    }
}

// 1. Remove Element (Without Method)
function removeElementWithoutMethod() {
    const elToDelete = parseInt(document.getElementById("deleteInput").value);
    if (isNaN(elToDelete)) return updateOutput("Enter a valid element to delete.");
    
    let newArray = [];
    let found = false;
    for (let i = 0; i < currentArray.length; i++) {
        if (currentArray[i] === elToDelete && !found) {
            found = true; // Remove only the first occurrence
        } else {
            newArray[newArray.length] = currentArray[i];
        }
    }
    
    if (found) {
        currentArray = newArray;
        updateOutput(`Element ${elToDelete} removed using loop.`);
    } else {
        updateOutput(`Element ${elToDelete} not found in array.`);
    }
}

// 2. Check Contains (With Method)
function checkContainsWithMethod() {
    const elToSearch = parseInt(document.getElementById("searchInput").value);
    if (isNaN(elToSearch)) return updateOutput("Enter a valid element to search.");
    
    const contains = currentArray.includes(elToSearch);
    if (contains) {
        updateOutput(`Array contains ${elToSearch} (checked using includes()).`);
    } else {
        updateOutput(`Array does NOT contain ${elToSearch} (checked using includes()).`);
    }
}

// 2. Check Contains (Without Method)
function checkContainsWithoutMethod() {
    const elToSearch = parseInt(document.getElementById("searchInput").value);
    if (isNaN(elToSearch)) return updateOutput("Enter a valid element to search.");
    
    let contains = false;
    for (let i = 0; i < currentArray.length; i++) {
        if (currentArray[i] === elToSearch) {
            contains = true;
            break;
        }
    }
    
    if (contains) {
        updateOutput(`Array contains ${elToSearch} (checked using loop).`);
    } else {
        updateOutput(`Array does NOT contain ${elToSearch} (checked using loop).`);
    }
}

// 3. Empty Array
function emptyArray() {
    currentArray = [];
    updateOutput("Array has been emptied.");
}

// Reset All
function resetAll() {
    currentArray = [];
    document.getElementById("arrayLength").value = "";
    document.getElementById("deleteInput").value = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("outputDisplay").innerHTML = "Current Array: []<br><br>Result: ";
}
