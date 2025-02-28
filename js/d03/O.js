//          i       code
// ====     1       " = "repeat(height)
// =  =     2       " " + " =" + " ".repeat(2) + " = "
// =  =     3       " = " + " ".repeat(2) + " = "
// ====     4       " = "repeat(height)



let height = 8;
let shape = "";
let record= "";

console.log(Math.trunc(height / 2 + 1));

for (let i = 1; i <= height; i++ ){
    if(i == 1 ||  i == height ) {
        record =  "=".repeat(height )
    }else {
        record =   "=" + " ".repeat(height-2) + "="
    }
    
    shape += record + "\n";
}
 
console.log(shape);