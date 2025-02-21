let height = 4;
let start  = 1;
let end    = 1;
let shape  ="";
let record ="";

for (let i = 1; i <= height; i++) {
    record = listNumberFromRangeAZ2Digit(start,end);
    shape += record + "\n";

    start = end + 1;
    end   = start + i;
}


console.log(shape);

function listNumberFromRangeAZ2Digit(start,end) {
    let result = "";
    for (let i = start; i <= end; i++) {
        if (i < 10) {
            result += "0" + i + " ";
        }else {
            result += i + " ";
        }
    }

    return result;
}