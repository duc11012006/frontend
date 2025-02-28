let = height = 5;
let shape = "";
let record = "";

for(let i = 1; i <= height; i++){
    record = "=".repeat(height-i) + "+".repeat(i);
    shape += record + "\n";
}

console.log(shape)