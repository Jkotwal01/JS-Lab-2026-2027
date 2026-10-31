let homePage = document.getElementById("homePage");
let mouseBox = document.getElementById("mouseBox");
let focusBox = document.getElementById("focusBox");

// Mouse enters the box
mouseBox.onmouseover = function () {
  homePage.style.backgroundColor = "lightblue";
};

// Mouse leaves the box
mouseBox.onmouseout = function () {
  homePage.style.backgroundColor = "white";
};

// Input field gets focus
focusBox.onfocus = function () {
  homePage.style.backgroundColor = "lightgreen";
};

// Input field loses focus
focusBox.onblur = function () {
  homePage.style.backgroundColor = "white";
};
