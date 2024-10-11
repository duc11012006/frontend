 //         i       recode
// =   =    1       "=" + " ".repear(height-2)
// =====    2       "=".repear(height)
// =====    3       "=".repear(height)
// =====    4       "=".repear(height)
// =   =    5       "=" + " ".repear(height-2)

let height = 5;
let shape = "";
let record= "";

console.log(Math.trunc(height / 2 + 1));

for (let i = 1; i <= height; i++ ){
    if(i == 1 ||  i == height ) {
        record = "=" + " ".repeat(height-2) + "=";
    }else {
        record = "=".repeat(height);
    }
    
    shape += record + "\n";
}
 
console.log(shape);
