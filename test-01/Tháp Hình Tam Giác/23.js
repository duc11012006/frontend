let height = 5;
let center = Math.floor(height/2) + 1;
let shape = "";
let shapeTop = "";
let shapeBottom = "";
let result = "";
let character = "0";

for(let i = 1; i <= center; i++) {
    record = " ".repeat(center - i) + character.repeat(2*i -1);
    shapeTop += record + "\n";
}

for(let i = center + 1; i <= height; i++){
    record = " ".repeat(i - center) + character.repeat(height + 2*center - 2*i);
    shapeBottom += record + "\n";
}

shape += shapeTop + shapeBottom;

console.log(shape)