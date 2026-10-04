let myArr = [];

function updateOutput(message) {
    const output = document.getElementById("outputDisplay");
    // Use JSON.stringify to display array contents properly
    const arrayStr = JSON.stringify(myArr);
    output.innerHTML = `Current Array: ${arrayStr}<br><br>Result: <span style="color: #0056b3;">${message}</span>`;
}

function createArray() {
    const size = parseInt(document.getElementById("arraySize").value);
    if (isNaN(size) || size < 0) {
        return updateOutput("Please enter a valid non-negative array size.");
    }
    // Step 2: Create array of specified size
    myArr = new Array(size).fill(0).map((_, i) => i + 1);
    updateOutput(`Created array of size ${size}.`);
}

function getInputValue() {
    const rawValue = document.getElementById("inputValue").value;
    const type = document.getElementById("inputType").value;
    
    // Convert the string based on selected Type
    if (type === "number") {
        return Number(rawValue);
    } else if (type === "object") {
        return { value: rawValue || "exampleObject" };
    } else if (type === "array") {
        // Simple comma separated array creation
        return rawValue ? rawValue.split(",").map(item => item.trim()) : [];
    }
    return rawValue; // string
}

// Step 3 & 6: Methods for adding elements
function pushElement() {
    const val = getInputValue();
    myArr.push(val);
    updateOutput(`Pushed ${JSON.stringify(val)} to the array.`);
}

function unshiftElement() {
    const val = getInputValue();
    myArr.unshift(val);
    updateOutput(`Unshifted ${JSON.stringify(val)} to the array.`);
}

function popElement() {
    if (myArr.length === 0) return updateOutput("Array is already empty.");
    const popped = myArr.pop();
    updateOutput(`Popped element: ${JSON.stringify(popped)}`);
}

function shiftElement() {
    if (myArr.length === 0) return updateOutput("Array is already empty.");
    const shifted = myArr.shift();
    updateOutput(`Shifted element: ${JSON.stringify(shifted)}`);
}

// Step 4: Check if appended object is an array using isArray()
function checkIsArray() {
    if (myArr.length === 0) {
        return updateOutput("Array is empty. Please add an element first to check.");
    }
    
    // Check the last appended element
    const lastElement = myArr[myArr.length - 1];
    
    // Step 1: use isArray() method
    const isArr = Array.isArray(lastElement);
    
    if (isArr) {
        updateOutput(`Yes! The last element (${JSON.stringify(lastElement)}) is an Array.`);
    } else {
        updateOutput(`No, the last element (${JSON.stringify(lastElement)}) is NOT an Array. Type is: ${typeof lastElement}`);
    }
}

// Reset UI state
function resetAll() {
    myArr = [];
    document.getElementById("arraySize").value = "";
    document.getElementById("inputValue").value = "";
    document.getElementById("inputType").value = "string";
    document.getElementById("outputDisplay").innerHTML = "Current Array: []<br><br>Result: ";
}
