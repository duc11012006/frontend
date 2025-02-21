let shape = "";
let height = 7;
let record = "";
let character = "#";


shape = character.repeat(height) + "\n";


for (let i = 2; i <= height; i++) {
  record = " ".repeat(i-1) + character;
  shape += record + "\n";
}


shape += character.repeat(height);

console.log(shape);