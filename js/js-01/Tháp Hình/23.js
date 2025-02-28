let height = 5;
let center = Math.floor(height/2) + 1;
let shape = "";
let shapeTop = "";
let shapeBottom = "";
let record = "";
let character = "O";

for (let i = 1; i <= center; i++) {
  record = " ".repeat(center - i) + character.repeat(2*i - 1);
  shapeTop += record + "\n";
}

for (let i = center; i <= height; i++) {
  record = " ".repeat(i - center) + character.repeat(2*(height - i + 1) - 1);
  shapeBottom += record + "\n";
}

shape = shapeTop + shapeBottom;

console.log(shape);