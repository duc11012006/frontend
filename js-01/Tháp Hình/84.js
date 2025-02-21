let height = 3;
let shape  = "".repeat(height-1) + 1 + "\n";
let record = "";

for(let i = 1; i <= height; i++) {
    let space  = " ".repeat(height - i);
    let number = i + " ".repeat(2*i - 3) + i;
    record = space + number +space;
    shape += record + "\n";
}

console.log(shape);