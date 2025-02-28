// height = 5       i       code

//     =            1       " ".repeat(height-1) + "="                          
//    ==            2       " ".repeat(3) +  "=" + " ".repeat(0) + "="
//   = =            3       " ".repeat(2) +  "=" + " ".repeat(1) + "="
//  =  =            4       " ".repeat(1) +  "=" + " ".repeat(2) + "="
// =====            5       "=".repeat(5)

// " ".repeat(x) + "=".repeat(y) + " ".repeat(x)
// " ".repeat(height-i)

// i    x       y

// 2    3       0
// 3    2       1
// 4    1       2


// i + x = height
// x = height-i




let height = 9;
let shape = "";
let record = "";


for (let i = 1; i <= height; i++ ){
    if(i == height  ) {
        record =  "=".repeat(height)
    }else  if(i == 1  ) {
        record =  " ".repeat(height-1) + "=" ; 
    }else{
        record =  " ".repeat(height-i) +  "=" + " ".repeat(i-2) + "=";
    }
    

    shape += record + "\n";
}
 
console.log(shape);