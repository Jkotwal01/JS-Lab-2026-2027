// Area of Circle:
function circleArea() {
  let r = Number(document.getElementById("radius").value);

  let area = 3.14159 * r * r;

  document.getElementById("circleResult").innerHTML =
    "Area = " + area.toFixed(2) + " sq Unit";
}

// Area of Rectangle:
function rectangleArea() {
  let l = Number(document.getElementById("length").value);
  let w = Number(document.getElementById("width").value);

  let area = l * w;

  document.getElementById("rectangleResult").innerHTML =
    "Area = " + area + " sq Unit";
}

// Area of Triangle:
function triangleArea() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let c = Number(document.getElementById("c").value);

  let s = (a + b + c) / 2;

  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  document.getElementById("triangleResult").innerHTML =
    "Area =  " + area.toFixed(2) + " sq Unit";
}

function resetAll() {
  document.getElementById("radius").value = "";
  document.getElementById("circleResult").innerHTML = "";
  document.getElementById("length").value = "";
  document.getElementById("width").value = "";
  document.getElementById("rectangleResult").innerHTML = "";
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("triangleResult").innerHTML = "";
}
