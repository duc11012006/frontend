// height = 5       i       code
// =====            1       "=".repeat(hieght)
// =                2       "=" + " ".repeat(4)
// =====            3       "=".repeat(hieght)
// =                4       "=" + " ".repeat(4)
// =                5       "=" + " ".repeat(4)

let height = 9;
let shape = "";
let recorF= "";

for (let i = 1; i <= height; i++ ){
    if( i == 1 || i == Math.trunc(height / 2) +1 ){
       recordF =  "=".repeat(height);
    }else {
        recordF=  "="+ " ".repeat(height-1);
    }
    shape += recordF  + "\n";
}
 
console.log(shape);