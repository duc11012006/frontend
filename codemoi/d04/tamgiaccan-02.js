// height = 5       i       code

// =========        1      " ".repeat(0) + "=".repeat(9) + " ".repeat(0)
//  =======         2      " ".repeat(1) + "=".repeat(7) + " ".repeat(1)
//   =====          3      " ".repeat(2) + "=".repeat(5) + " ".repeat(1)
//    ===           4      " ".repeat(3) + "=".repeat(3) + " ".repeat(3)
//     =            5      " ".repeat(4) + "=".repeat(1) + " ".repeat(4)

// " ".repeat(x) + "=".repeat(y) + " ".repeat(x)
// " ".repeat(height-i)

// i    x       y
// 1    o       
// 2    1       
// 3    2       
// 4    3       
// 2h-1 = i - 1 + i - 1 + y
// i-1 + i-1 + y = 2h-1
// y = 2h+1-2i

let height = 9;
let shape = "";
let record = "";

for (let i = 1; i <= height; i++ ){
    
    record =  " ".repeat(i-1) + "=".repeat((height*2)+1-2*i) + " ".repeat(i-1);
    
    
    shape += record + "\n";
}
 
console.log(shape);