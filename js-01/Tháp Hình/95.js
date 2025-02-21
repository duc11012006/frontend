let height = 5;
let shape = "";
let record = "";


for (let i = 1; i <= height; i++) {
  let character = (i % 2 == 0) ? "+" : "o";
  let center = (i + character.repeat(1)).length;
  center = center.slice(0, center.length - 1);

  record = " ".repeat(height - i) + character.repeat(i) + center;
  shape += record + "\n";
}


for (let i = 1; i <= height/2; i++) {
  let character = (i % 2 == 0) ? "+" : "o";
  record = " ".repeat(i - 1) + character.repeat(height-i+1) + " ".repeat(2*(height-i)+1) + character.repeat(height-i+1);
  shape += record + "\n";
}

shape += " ".repeat(2 * height - 1);
console.log(shape);   