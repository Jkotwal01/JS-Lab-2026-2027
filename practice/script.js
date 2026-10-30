// 1. Area of Circle:
function CircleArea() {
  let r = Number(document.getElementById("radius").Value);
  let area = 3.14 * r * r;
  document.getElementById("CircleResult").innerHTML =
    "Area: " + area.toFixed(2) + " sq.Unit";
}
// 2. Area of Rectangle:
function RectangleArea() {
  let l = Number(document.getElementById("length").value);
  let w = Number(document.getElementById("width").value);

  let area = l * w;
  document.getElementById("RectangleResult").innerHTML =
    "Area " + area.toFixed(2) + " sq.Unit";
}
// 3. Area od Triangle:
function TriangleArea() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let c = Number(document.getElementById("c").value);

  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  Document.getElementById("TriangleResult").innerHTML =
    "Area " + area.toFixed(2) + " sq.Unit";
}

// 4. CircleReset:
function CircleReset() {
  document.getElementById("radius").innerHTML = "";
  document.getElementById("CircleResult").innerHTML = "";
}

// 5. RectangleReset:
function RectangleReset() {
  document.getElementById("length").innerHTML = "";
  document.getElementById("width").innerHTML = "";
  document.getElementById("RectangleResult").innerHTML = "";
}

// 6. TriangleReset:
function TriangleReset() {
  document.getElementById("a").innerHTML = "";
  document.getElementById("b").innerHTML = "";
  document.getElementById("c").innerHTML = "";
  document.getElementById("TriangleResult").innerHTML = "";
}
