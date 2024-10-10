// height = 5       i       code
//  ====            1       " ".repeat(1) + "=".repeat(4)
// =                2       "=" + " ".repeat(4)
// =                3       "=" + " ".repeat(4)
// =                4       "=" + " ".repeat(4)
//  ====            5       " ".repeat(1) + "=".repeat(4)

let height = 9 ;
let shape = "";
let recordC= "";


console.log(Math.trunc(height / 2 + 1));

for (let i = 1; i <= height; i++ ){
    if(i == 1 ||  i == height ) {
        recordC =  " ".repeat(1) + "=".repeat(height-1);
    }else {
        recordC =  "=" + " ".repeat(height-1);
    }
    
    shape += recordC + "\n";
}

// h -1 = 2x
 
console.log(shape);