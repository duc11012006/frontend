//          i       code
// =        1       " ".repeat(0) + "=" +" ".repeat(2)
//  =       2       " ".repeat(1) + "=" + " ".repeat(1)
//   =      3       " ".repeat(2) + "=" + " ".repeat(0)
// i x height
// 1 2    i + x = h => x = 
// 2 1
// 3 0
let height =9;
let shape = "";
let record= "";

for (let i = 1; i <= height; i++){
    record= " ".repeat(i-1)+ "="+ " ".repeat(height-i);
    shape += record + "\n";
}
 
console.log(shape); 