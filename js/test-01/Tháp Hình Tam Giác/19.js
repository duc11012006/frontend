let height = 10;
let shape = "", shapeTop = "", shapeBottom = "";
let record = "";
let character = "#";
let center = height/2;

let line = character.repeat(height) + "\n";

for(let i = 2; i <= center; i++) {
    record = " ".repeat(i-1) + character + " ".repeat(height-2*i) + character;
    shapeTop += record + "\n";
}

let centerCharacter = " ".repeat(center) + character + "\n";

for(let i = 2 + center; i < height; i++) {
    record = " ".repeat(height - i) + character + " ".repeat(2*i-height-2) + character;
    shapeBottom += record + "\n";
}

shape = line + shapeTop + centerCharacter + shapeBottom + line;

console.log(shape);