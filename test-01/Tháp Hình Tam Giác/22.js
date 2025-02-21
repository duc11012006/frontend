let height = 5;
let record = "";
let shape = "", shapeTop = "", shapeBottom = "";
let character = "#";
let center = Math.floor(height/2);

let line = character.repeat(height) + "\n";

for(i = 2; + i <= height / 2; i++) {
    record = character + " ".repeat(i-2) + character + " ".repeat(height-2*i) + character + " ".repeat(i-2) + character;
    shapeTop += record + "\n";
}

let centerCharacter = character + " ".repeat(center-1) + character + " ".repeat(center-1) + character + "\n";

for(let i = 2 + center; i < height; i++) {
    record = character + " ".repeat(height - i - 1) + character + " ".repeat(2*i-height-2) + character + " ".repeat(height-i-1) + character;
    shapeBottom += record + "\n";
}

shape = line + shapeTop + centerCharacter + shapeBottom + line;

console.log(shape);