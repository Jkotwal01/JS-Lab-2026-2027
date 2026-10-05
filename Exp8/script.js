// Get the HTML elements
let homePage = document.getElementById("homePage");
let mouseBox = document.getElementById("mouseBox");
let focusBox = document.getElementById("focusBox");

// Mouse over event
mouseBox.onmouseover = function() { 
    homePage.style.backgroundColor = "lightblue"; 
};

// Mouse leaves the box
mouseBox.onmouseout = function() { 
    homePage.style.backgroundColor = "white"; 
};

// Focus event
focusBox.onfocus = function() { 
    homePage.style.backgroundColor = "lightgreen"; 
};

// When focus is removed
focusBox.onblur = function() { 
    homePage.style.backgroundColor = "white"; 
};
