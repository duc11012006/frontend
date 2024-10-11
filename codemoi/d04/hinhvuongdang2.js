// height  = 7          i       code
// =======              1       "=".repeat(height)
// =	 =              2       "=" + " ".repeat(5) + "="
// =     =              3       "=" + " ".repeat(5) + "="
// =======              4       "=".repeat(height)
// =     =              5       "=" + " ".repeat(5) + "="
// =	 =              6       "=" + " ".repeat(5) + "="
// =======              7       "=".repeat(height)

let height = 9;
let shape = "";
let record= "";

for (let i = 1; i <= height; i++ ){
    if(i == 1 || i == Math.trunc(height / 2 + 1) || i == height  ) {
        record = "=".repeat(height);
    }else {
        record = "=" + " ".repeat(height-2) + "=";
    }
    
    shape += record + "\n";
}
 
console.log(shape);
 

