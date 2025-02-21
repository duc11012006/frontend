let height = 4;
let shape  = "";
let record = "";

for (let i = 1; i <= height; i++) {
    record = " ".repeat(i - 1) + listNumber1ToN(height + 1 - i);
    shape += record + "\n";
}

console.log(shape);


function listNumber1ToN(n) {
    let result ="";
    for (let i = 1; i <= n; i++) {
        result += i.toString();
    }
    return result;
}