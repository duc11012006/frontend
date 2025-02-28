//          i       code
// ====     1       " = "repeat(height)
// =  =     2       " " + " =" + " ".repeat(2) + " = "
// =  =     3       " = " + " ".repeat(2) + " = "
// ====     4       " = "repeat(height)



let height = 8;
let shape = "";
let recordO= "";

console.log(Math.trunc(height / 2 + 1));

for (let i = 1; i <= height; i++ ){
    if(i == 1 ||  i == height ) {
        recordO =  "=".repeat(height )
    }else {
        recordO =   "=" + " ".repeat(height-2) + "="
    }
    
    shape += recordO + "\n";
}
 
console.log(shape);