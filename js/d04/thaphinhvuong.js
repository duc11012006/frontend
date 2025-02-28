// height  = 5          i       code
// =   =                1       "=" + " ".repeat(3) + "="
// =====                2       "=".repeat(height)
// =====                3       "=".repeat(height)
// =====                4       "=".repeat(height)
// =   =                5       "=" + " ".repeat(3) + "="

let height = 9;
let shape = "";
let record= "";

for (let i = 1; i <= height; i++ ){
    if(i == 1 ||  i == height ) {
        record = "=" + " ".repeat(height-2) + "=";
    }else {
        record = "=".repeat(height);
    }
    
    shape += record + "\n";
}
 
console.log(shape);
