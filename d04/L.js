//          i       code
// =        1        "=" + " ".repeat(2)
// =        2        "=" + " ".repeat(2)
// =        3        "=" + " ".repeat(2)
// =        4         "=" + " ".repeat(2)
// ======   5        "=".repeat(height)

let height = 9;
let shape = "";
let recordL= "";

for (let i = 1; i <= height; i++ ){
    if( i == height) {
        recordL =  "=".repeat(height);

    }else {
        recordL = "=" + " ".repeat(height-1);
    }
    shape += recordL + "\n";
}
 
console.log(shape);
