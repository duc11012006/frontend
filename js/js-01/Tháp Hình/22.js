let height = 5;
let shape = "", shapeTop = "", shapeBottom = "";
let record = "";
let character = "*";
let center = Math.floor(height / 2);

let Line = character.repeat(height) + "\n";


for (let i = 2; i <= height / 2 + 1; i++) {
  record = character.repeat(i - 1) + " ".repeat(2 * (center - i + 1)) + character.repeat(i - 1);
  shapeTop += record + "\n";
}

let centerCharacter = character.repeat(center) + "\n";


for (let i = 2 + center; i <= height; i++) {
  record = character.repeat(height - i + 1) + " ".repeat(2 * (i - center - 1)) + character.repeat(height - i + 1);
  shapeBottom += record + "\n";
}

shape = Line + shapeTop + centerCharacter + shapeBottom + Line;

console.log(shape);