// length = 5       i       code
// =====            1       "=".repeat(height)

// =====            2       "=".repeat(height)

let height = 5;
let shape = "";
let record = "";
 
for (let i = 1; i <= height-2; i++ ){
    if(i == 1 || i == (height - 2 )) {
        record = "=".repeat(height);
    }else {
        record = " ".repeat(height);
    }
    
    shape += record + "\n";
}
 
console.log(shape);
