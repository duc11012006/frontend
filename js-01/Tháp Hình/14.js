let height =5;
let shape  = "";
let record = "";

for (let i = 1; i <= height; i++) {
    let space  =" ".repeat(height - i);
    let left   =listNumberFromRangeZA(i, 2);
    let right   =listNumberFromRangeZA(2, i);

    record = space + left + 1 + right + space;
    shape += record + "\n";
}


console.log(shape);


function listNumberFromRangeZA(start,end) {
    let result ="";
    for (let i = start; i <= end; i++) {
        result +=1;
    }

    return result;
}