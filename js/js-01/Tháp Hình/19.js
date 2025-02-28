let height = 5;
let shape = "", shapeTop = "", shapeBottom = "";
let record = "";
let character = "^";
let center = height / 2;

let Line = character.repeat(height) + "\n";

// shapeTop
for (let i = 1; i <= center; i++) {
  record = " ".repeat(center - i) + character.repeat(2*i - 1) + " ";
  shapeTop += record + "\n";
}

// Content Bottom
for (let i = 2 + center; i <= height; i++) { 
  record = " ".repeat(i - center - 1) + character.repeat(2*(height - i + 1) - 1) + " ";
  shapeBottom += record + "\n";
}

let centerCharacter = " ".repeat(center) + character + "\n";

shape = Line + shapeTop + centerCharacter + shapeBottom + Line;

console.log(shape);