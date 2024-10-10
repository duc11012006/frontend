// height = 5       i       code
// +                1       lap1
// ++               2       lap2
// +++              3       lap3
// ++++             4
// +++++            5

let height =5;
let shape = "";
let record= "";

for (let i = 1; i <= height; i++ ) {
    record = "+".repeat(i);
    shape += record + "\n";
}
console.log(shape);