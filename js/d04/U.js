//          i       code
// = =      1       " ".repeat(0) + "=" + " " + "="
// = =      2       " ".repeat(0) + "=" + " " + "="
// ===      3       "="repeat(height)

// height = 5       i       code
// =   =            1       " ".repeat(0) + "="+ " ".repeat(3) + "="
// =   =            2       " ".repeat(0) + "="+ " ".repeat(3) + "="
// =   =            3       " ".repeat(0) + "="+ " ".repeat(3) + "="
// =   =            4       " ".repeat(0) + "="+ " ".repeat(3) + "="
// =====            5       "=".repeat(height)


let height = 9;
let shape = "";
let recordU= "";

for (let i = 1; i <= height; i++ ){
    if( i == height) {
        recordU =  "=".repeat(height);

    }else {
        recordU = "="+ " ".repeat(height-2) + "=";
    }
    shape += recordU + "\n";
}
 
console.log(shape);
