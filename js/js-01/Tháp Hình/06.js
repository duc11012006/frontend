let height = 5;

//          i       record
// +        1       + lap 1
// ++       2       + lap 2
// +++      3       + lap 3
// ++++     4
// +++++    5
// n new line
let shape = "";
let record= "";

for (let i = 1; i <= height; i++ ) {
    record = "+".repeat(i);
    shape += record + "\n";
}
console.log(shape);