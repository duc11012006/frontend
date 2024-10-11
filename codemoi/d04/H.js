// height = 7       i       code
// =     =          1       " ".repeat(0) + "=" + " ".repeat(5) + "="
// =     =          2        " ".repeat(0) + "=" + " ".repeat(5) + "="
// =     =          3       " ".repeat(0) + "=" + " ".repeat(5) + "="
// =======          4       "=".repeat(height)
// =     =          5       " ".repeat(0) + "=" + " ".repeat(5) + "="
// =     =          6       " ".repeat(0) + "=" + " ".repeat(5) + "="
// =     =          7       " ".repeat(0) + "=" + " ".repeat(5) + "="

let height = 11;
let shape = "";
let recordH= "";

for (let i = 1; i <= height; i++ ){
    if( i == Math.trunc(height / 2 +1)){
       recordH =  "=".repeat(height);

    }else {
        recordH = "=" + " ".repeat(height-2) + "=";
    }
    shape += recordH + "\n";
}
 
console.log(shape);