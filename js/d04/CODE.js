let height = 9;
let shape = "";
let recordC = "";
let space = " ".repeat(2);

for (let i = 1; i <= height; i++) {
    // C
    if (i == 1 || i == height) {
        recordC = " ".repeat(1) + "=".repeat(height - 1);
    } else {
        recordC = "=" + " ".repeat(height - 1);
    }

    //o
    if(i == 1 ||  i == height ) {
        recordO =  "=".repeat(height )
    }else {
        recordO =   "=" + " ".repeat(height-2) + "="
    }


    //D

    if (i == 1 || i == height) {
        recordD = "=".repeat(height - 3) + " ".repeat(3);
  
     } else if (i == 2 || i == height - 1) {
        recordD = "=" + " ".repeat(height - 3) + "=" + " ";
     } else {
        recordD = "=" + " ".repeat(height - 2) + "=";
     }
     
    //E

    if (i == 1 || i == height || i == Math.trunc(height / 2 + 1)) {
        recordE = "=".repeat(height);
    } else {
        recordE = "=" + " ".repeat(height - 1);
    }
    
    shape += recordC + space + recordO + space + recordD + space + recordE + "\n";
    }

    console.log(shape);