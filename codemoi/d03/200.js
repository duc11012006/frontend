//          i       code
//   =      1       " ".repeat(2)+ "="+ " ".repeat(0)
//  =       2       " ".repeat(1)+ "=" + " ".repeat(1)
// =        3       " ".repeat(0)+ "=" + " ".repeat(2)

let height = 9; // i + x = h => x = h - i
let shape = "";
let record= "";

for (let i = 1; i <= height; i++){
    record= " ".repeat(height-i)+ "="+ " ".repeat(i-1);
    shape += record + "\n";
}
 
console.log(shape); 