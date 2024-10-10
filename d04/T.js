// height = 7       i       code
// =======          1       "=".repeat(height)
//    =             2       " ".repeat(3) + "=" + " ".repeat(3)
//    =             3       " ".repeat(3) + "=" + " ".repeat(3)
//    =             4       " ".repeat(3) + "=" + " ".repeat(3)
//    =             5       " ".repeat(3) + "=" + " ".repeat(3)
//    =             6       " ".repeat(3) + "=" + " ".repeat(3)
//    =             7       " ".repeat(3) + "=" + " ".repeat(3)

let height = 9 ;
let shape = "";
let recordT= "";


console.log(Math.trunc(height / 2 + 1));

for (let i = 1; i <= height; i++ ){
    if(i == 1  ) {
        recordT =  "=".repeat(height );
    }else {
        recordT =  " ".repeat((height-1)/2) + "=" + " ".repeat((height-1)/2)
    }
    
    shape += recordT + "\n";
}


 
console.log(shape);