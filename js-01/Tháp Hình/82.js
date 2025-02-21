let height = 3;
let shape  = "";
let record = "";

for (let i = 1; i <= height; i++) {
    record = listNumberFromRangeAZ(i,height);
    shape += record + "\n";
}

console.log(shape);


function listNumberFromRangeAZ(star,end) {
    let result = "";
    for (let i = star; i <= end; i++){
        result += i;
    }
    return result;
}