//              i       code
//    =         1       " ".repeat(3)+ "=" + " ".repeat(3) 
//    =         2       " ".repeat(3)+ "=" + " ".repeat(3) 
//    =         3       " ".repeat(3)+ "=" + " ".repeat(3) 
// =======      4       "=".repeat(height)
//    =         5       " ".repeat(3)+ "=" + " ".repeat(3) 
//    =         6       " ".repeat(3)+ "=" + " ".repeat(3) 
//    =         7       " ".repeat(3)+ "=" + " ".repeat(3) 

let height = 9;
let shape = "";
let record= "";

console.log(Math.trunc(height / 2 + 1));

for (let i = 1; i <= height; i++ ){
    if (i == Math.trunc(height / 2 + 1)  ) {
        record = "=".repeat(height);
    }else{
        record =  " ".repeat((height-1) /2)+ "=" + " ".repeat((height-1) /2 )
    }

    shape += record + "\n";
}
 
console.log(shape);