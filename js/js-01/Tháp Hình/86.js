let height = 2;
let shape  ="";
let record ="";

for (let i = 1; i <= height; i++) {
    record = i + " ".repeat(height - 2) + (i + height -1);
    shape += record + "\n";
}

shape += listNumberFromRangeAZ(height, height + height - 1);

console.log(shape);


function listNumberFromRangeAZ (n) {
    let result = "";
    for ( let i = 1 ; i <= height; i++) {
        record += i.toString();
    }
    return result;
}

function listNumberFromRangeAZ(start,end) {
    let result ="";
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
}

shape += listNumberFromRangeAZ(height, height + height - 1);

console.log(shape);