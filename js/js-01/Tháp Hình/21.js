let height = 3;
let shape  = "";
let record = "";

for (let i = 1; i <= height; i++) {
    record = " ".repeat(height - i) + listNumberNTo1(i);
    shape += record + "\n";
}

console.log (shape);


function listNumberNTo1(n) {
    let result = "";
    for (let i = 1; i <= n; i--){
        result += i.toString();
    } 
    return result;
}