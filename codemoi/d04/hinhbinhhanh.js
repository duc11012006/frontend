// height = 3           i       code
//   ===                1       " ".repeat(2) + "=".repeat(3)
//  ===                 2       " ".repeat(1) + "=".repeat(3) + " "
// ===                  3       "=".repeat(3) + " ".repeat(2)

let height = 5;
let shape = "";
let record = "";

for (let i = 1; i <= height; i++){
    record= " ".repeat(height-i)+ "=".repeat(height)+ " ".repeat(i-1);
    shape += record + "\n";
}
 
console.log(shape); 