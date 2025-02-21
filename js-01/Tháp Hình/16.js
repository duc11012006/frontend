let height = 3;
let shape  = "";
let record = "";

for (let i = 1; i <= height; i++) {
    record = listNumberByTime(1, 3, 2, " ");
    shape += record + "\n";
}

console.log(shape);



function listNumberByTime(start, totalTimes, step, separator){
    let result = "";
    let time   = 0
    while ( times < totalTimes) {
        result += (start + step * time) + separator;
        time++;
    }
    return result.slice(0, -separator.length);
}