let height = 7;
let shape  = "";
let record = "";

for (let i = 1; i <= height; i++){
    record = " ".repeat(i-1) + i;
    shape += record + "\n";
}


console.log (shape)