// height = 5       i       code

//  =====           1       "=".repeat(height)                       
//  =  =            2       "=" + " ".repeat(2) + "=" + " ".repeat(1)
//  = =             3       "=" + " ".repeat(1) + "=" + " ".repeat(2)
//  ==              4       "=" + " ".repeat(0) + "=" + " ".repeat(3)
//  =               5       "=" + " ".repeat(4)

// " ".repeat(x) + "=".repeat(y) + " ".repeat(x)
// " ".repeat(height-i)

// i    x       y

// 1    0       0
// 2    3       1
// 3    2       2
// 4    1

// i + x = height
// x = height-i




let height =5 ;
let shape = "";
let record = "";


for (let i = 1; i <= height; i++ ){
    if(i == 1  ) {
        record =   "=".repeat(height);
    }else  if(i == height  ) {
        record =  "=" + " ".repeat(height-1);
    }else{
        record =  "=" + " ".repeat(height-i-1) + "=" + " ".repeat(height-1);
    }
    

    shape += record + "\n";
}
 
console.log(shape);