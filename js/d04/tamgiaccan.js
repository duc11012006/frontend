// height = 5       i       code
//     =            1       " ".repeat(4) + "=" + " ".repeat(4)
//    ===           2       " ".repeat(3) + "=".repeat(3) + " ".repeat(3)
//   =====          3       " ".repeat(2) + "=".repeat(5) + " ".repeat(2)
//  =======         4       " ".repeat(1) + "=".repeat(7) + " ".repeat(1)
// =========        5       "=".repeat(9)

// " ".repeat(x) + "=".repeat(y) + " ".repeat(x)
// " ".repeat(height-i)

// i + x = h
// 1   4
// 2   3

let height = 6;
let shape = "";
let record = "";

for (let i = 1; i <= height; i++) {
    record= " ".repeat(height-i) + "=".repeat(2*i-1) + " ".repeat(height-i);
    
    shape += record + "\n";
}


console.log(shape);