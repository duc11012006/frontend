//          i       recode
// =   =    1       "=" + " ".repeat(height-2) + "="
//  ===     2       " " + "=".repeat(3)+" " 
//  ===     3       " " + "=".repeat(3)+" " 
//  ===     4        " " + "=".repeat(3)+" " 
// =   =    5       "=" + " ".repeat(height-2) +"="

let height = 7;
let shape = "";
let record= "";

console.log(Math.trunc(height / 2 + 1));

for (let i = 1; i <= height; i++ ){
    if(i == 1 ||  i == height ) {
        record = "=" + " ".repeat(height-2) + "="
    }else {
        record = " " + "=".repeat(height-2)+" "  
    }
    
    shape += record + "\n";
}
 
console.log(shape);