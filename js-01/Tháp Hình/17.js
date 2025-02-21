let height = 5 ;
let shape  = "";
let record = "";

for (let i = 1; i <= height; i++) {
    let arround ="#".repeat(height - i);
    let left    = listNumber1ToN(i - 1);
    let right    = listNumber1ToN(i - 1);

    record = arround + left + i + right + arround;
    shape += record + "\n";
}

console.log(shape)


function listNumber1ToN(n) {
    let result ="";
    for (let i = n; i >= 1; i--) {
        result += i.toString();
    }

    return result;
}