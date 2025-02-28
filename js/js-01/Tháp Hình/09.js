let heigth = 7;
let shape  = "";
let record = "";

for (let i = 1; i <= heigth; i++) {
    let character = (i % 2 == 0) ? "=" : "+";
    record = i + character.repeat(i);
    shape += record + "\n";
}


console.log(shape);