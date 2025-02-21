let height = 4;
let shape  = "";
let record = "";

for (let i = 1; i <= height; i++) {
    let arround = "#".repeat(height - i);
    let center  = (i + "").repeat(i*2 -1);

    record = arround + center + arround;
    shape += record + "\n";
}

console.log(shape);