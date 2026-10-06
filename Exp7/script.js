let myArr = [];

function updateOutput(message) {
    const output = document.getElementById("outputDisplay");
    const arrayStr = JSON.stringify(myArr);
    
    // Capture which approach ran to display it in the output window
    const approach = document.getElementById("approachType").value;
    const approachLabel = approach === "withMethods" ? "Built-in Method" : "Manual / No-Method";
    
    output.innerHTML = `Current Array: ${arrayStr}<br><br>
    <small style="color: #6c757d;">Approach Used: ${approachLabel}</small><br>
    Result: <span style="color: #0056b3;">${message}</span>`;
}

function createArray() {
    const size = parseInt(document.getElementById("arraySize").value);
    if (isNaN(size) || size < 0) {
        return updateOutput("Please enter a valid non-negative array size.");
    }
    
    const approach = document.getElementById("approachType").value;
    
    if (approach === "withMethods") {
        // Approach A: Built-in Array constructor and map methods
        myArr = new Array(size).fill(0).map((_, i) => i + 1);
    } else {
        // Approach B: Without built-in array generative methods (Using a raw for-loop)
        myArr = [];
        for (let i = 0; i < size; i++) {
            myArr[i] = i + 1;
        }
    }
    updateOutput(`Created array of size ${size}.`);
}

function getInputValue() {
    const rawValue = document.getElementById("inputValue").value;
    const type = document.getElementById("inputType").value;
    
    if (type === "number") {
        return Number(rawValue);
    } else if (type === "object") {
        return { value: rawValue || "exampleObject" };
    } else if (type === "array") {
        // Replicating split & trim logic without using array.map method for pure manual approach compatibility
        if (!rawValue) return [];
        const rawItems = rawValue.split(",");
        const cleanedItems = [];
        for (let i = 0; i < rawItems.length; i++) {
            cleanedItems[i] = rawItems[i].trim();
        }
        return cleanedItems;
    }
    return rawValue; // string
}

// Step 3 & 6: Methods for adding/removing elements
function pushElement() {
    const val = getInputValue();
    const approach = document.getElementById("approachType").value;

    if (approach === "withMethods") {
        myArr.push(val);
    } else {
        // Without method: Place value at index equal to current length
        myArr[myArr.length] = val;
    }
    updateOutput(`Pushed ${JSON.stringify(val)} to the array.`);
}

function unshiftElement() {
    const val = getInputValue();
    const approach = document.getElementById("approachType").value;

    if (approach === "withMethods") {
        myArr.unshift(val);
    } else {
        // Without method: Manually shift all items to the right to clear room at index 0
        const tempArr = [];
        tempArr[0] = val;
        for (let i = 0; i < myArr.length; i++) {
            tempArr[i + 1] = myArr[i];
        }
        myArr = tempArr;
    }
    updateOutput(`Unshifted ${JSON.stringify(val)} to the array.`);
}

function popElement() {
    if (myArr.length === 0) return updateOutput("Array is already empty.");
    const approach = document.getElementById("approachType").value;
    let popped;

    if (approach === "withMethods") {
        popped = myArr.pop();
    } else {
        // Without method: Extract the last value, then forcefully drop length to delete it
        popped = myArr[myArr.length - 1];
        myArr.length = myArr.length - 1;
    }
    updateOutput(`Popped element: ${JSON.stringify(popped)}`);
}

function shiftElement() {
    if (myArr.length === 0) return updateOutput("Array is already empty.");
    const approach = document.getElementById("approachType").value;
    let shifted;

    if (approach === "withMethods") {
        shifted = myArr.shift();
    } else {
        // Without method: Extract the first value, shift all items index-1 backward
        shifted = myArr[0];
        const tempArr = [];
        for (let i = 1; i < myArr.length; i++) {
            tempArr[i - 1] = myArr[i];
        }
        myArr = tempArr;
    }
    updateOutput(`Shifted element: ${JSON.stringify(shifted)}`);
}

// Step 4: Check if appended object is an array using isArray()
function checkIsArray() {
    if (myArr.length === 0) {
        return updateOutput("Array is empty. Please add an element first to check.");
    }
    
    const lastElement = myArr[myArr.length - 1];
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
    document.getElementById("approachType").value = "withMethods";
    document.getElementById("outputDisplay").innerHTML = "Current Array: []<br><br>Result: ";
}
