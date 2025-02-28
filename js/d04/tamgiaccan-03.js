// height = 5       i       code

// =                1       "=".repeat(1) + " ".repeat(2)
// ==               2       "=".repeat(2) + " ".repeat(1)
// ===              3       "=".repeat(3) + " ".repeat(0)
// ==               4       "=".repeat(2) + " ".repeat(1)
// =                5       "=".repeat(1) + " ".repeat(2)

// " ".repeat(x) + "=".repeat(y) + " ".repeat(x)
// " ".repeat(height-i)

// i    x       y
// 1    1       2
// 2    2       1
// 3    3       0
// 4    2       1
// 5    1       2

// i + x = h + 1
// x     = h + 1 -i

let height = 9;
let shape = "";
let record = "";

// y = center - height - 1 + i + 

console.log(Math.trunc(height / 2 )+1);

let center =  Math.trunc((height/2)+1);
for (let i = 1; i <= height; i++ ){
    if(i <= center) {
        record =  "=".repeat(i) + " ".repeat(center- i);
    }else{
        record =  "=".repeat(height+1-i) + " ".repeat(center - height - 1 + i ); 
    }
    

    shape += record + "\n";
}
 
console.log(shape);