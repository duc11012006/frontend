// height = 7       i           code
// =======          1           "=".repeat(hieght)
// =                2           "="+ " ".repeat(6)
// =                3           "="+ " ".repeat(6)
// =======          4           "=".repeat(hieght)
// =                5           "="+ " ".repeat(6)
// =                6           "="+ " ".repeat(6)
// =======          7           "=".repeat(hieght)

let height = 7;
let shape = "";
let recordE= "";

for (let i = 1; i <= height; i++ ){
    if( i == 1 ||  i == height|| i == Math.trunc(height / 2 +1 )){
       recordE =  "=".repeat(height);
    }else {
        recordE =  "="+ " ".repeat(height-1);
    }
    shape += recordE + "\n";
}
 
console.log(shape);