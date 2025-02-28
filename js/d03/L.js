//          i       code
// =        1        "=" + " ".repeat(2)
// =        2        "=" + " ".repeat(2)
// =        3        "=" + " ".repeat(2)
// =        4         "=" + " ".repeat(2)
// ======   5        "=".repeat(height)

let height = 9;
let shape = "";
let record= "";

for (let i = 1; i <= height; i++ ){
    if( i == height) {
        record =  "=".repeat(height);

    }else {
        record = "=" + " ".repeat(height-1);
    }
    shape += record + "\n";
}
 
console.log(shape);
