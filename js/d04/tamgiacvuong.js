// height = 5       i       code

// =                  1       "=" +" ".repeat(height-1)                          
// ==                2       "=" + " ".repeat(0) + "=" + " ".repeat(3)
// = =              3       "=" + " ".repeat(1) + "=" + " ".repeat(2)
// =  =             4       "=" + " ".repeat(2) + "=" + " ".repeat(1)
// =====            5       "=".repeat(5)

// " ".repeat(x) + "=".repeat(y) + " ".repeat(x)
// " ".repeat(height-i)

// i    x       y

// 2    0       3
// 3    1       2
// 4    2       1


// i - x = 2
// x = i-2




let height = 5;
let shape = "";
let record = "";


for (let i = 1; i <= height; i++ ){
    if(i == height  ) {
        record =  "=".repeat(height)
    }else  if(i == 1  ) {
        record =  "=" +" ".repeat(height-1) ;
    }else{
        record =  "=" + " ".repeat(i-2) + "=" + " ".repeat(1);
    }
    

    shape += record + "\n";
}
 
console.log(shape);