//          i   record
// =====    1   "=".repeat(height)
// =   =    2   "=" + " ".repeat(height-2) + "="
// =   =    3   "=" + " ".repeat(height-2)+ "="
// =   =    4   "=" + " ".repeat(height-2)+ "="
// =====    5   "=".repeat(height)
// h = 2 + x
let height = 7;
let shape = "";
let record= "";

for (let i = 1; i <= height; i++ ){
    if(i == 1 || i == height) {
        record = "=".repeat(height);
    }else {
        record = "=" + " ".repeat(height-2) + "=";
    }
    
    shape += record + "\n";
}
 
console.log(shape);
