// height = 7       i           code
// =======          1           " = ".repeat(height)
//    =             2           " ".repeat(3) + "=" + " ".repeat(3)
//    =             3           " ".repeat(3) + "=" + " ".repeat(3)
//    =             4           " ".repeat(3) + "=" + " ".repeat(3)
//    =             5           " ".repeat(3) + "=" + " ".repeat(3)
//    =             6           " ".repeat(3) + "=" + " ".repeat(3)
// =======          7           " = ".repeat(height)


let height = 7  ;
let shape = "";
let recordI= "";


console.log(Math.trunc(height / 2 + 1));

for (let i = 1; i <= height; i++ ){
    if(i == 1 ||  i == height ) {
        recordI =  "=".repeat(height );
    }else {
        recordI =  " ".repeat((height-1)/2) + "=" + " ".repeat((height-1) /2);
    }
    
    shape += recordI + "\n";
}

// h -1 = 2x
 
console.log(shape);