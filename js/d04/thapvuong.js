// height  = 5          i       code
// =====                1       "=".repeat(height)
// =	=               2       "=" + " ".repeat(3) + "="
// =	=               3       "=" + " ".repeat(3) + "="
// =	=               4       "=" + " ".repeat(3) + "="
// =====                5       "=".repeat(height)

let height = 5;
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
