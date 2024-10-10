// height = 5       i       code

//  =====           1       "=".repeat(height)                       
//   =  =           2       " ".repeat(1) + "=".repeat(1) + " "repeat(2) + "="
//    = =           3       " ".repeat(2) + "=".repeat(1) + " ".repeat(1) + "="
//     ==           4       " ".repeat(3) + "=".repeat(1) + " ".repeat(0) + "="
//      =           5       " ".repeat(4) + "="

// " ".repeat(x) + "=".repeat(y) + " ".repeat(x)
// " ".repeat(height-i)

// i    x       y               i       x       y
//                              1       0       
// 2    3       0               2       1
// 3    2       1               3       2
// 4    1       2               4       3


// i + x = heightss
// x = height-i




let height = 7;
let shape = "";
let record = "";


for (let i = 1; i <= height; i++ ){
    if(i == 1  ) {
        record =  "=".repeat(height) ;
    }else  if(i == height  ) {
        record =  " ".repeat(height-1) + "=";
    }else{
        record =  " ".repeat(i-1) + "=" + " ".repeat(height-i-1) + "=";  
        

    }
    

    shape += record + "\n";
}
 
console.log(shape);




