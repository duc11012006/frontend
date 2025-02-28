let height = 9 ;
let shape = "";
let recordC= "";
let space = " ".repeat(2);

for (let i = 1; i <= height; i++ ){

//L
if( i == height) {
    recordL =  "=".repeat(height);

}else {
    recordL = "=" + " ".repeat(height-1);
}

//O
if(i == 1 ||  i == height ) {
    recordO =  "=".repeat(height )
}else {
    recordO =   "=" + " ".repeat(height-2) + "="
}

//v
if(  i == height){
    recordV = " ".repeat(height-1) + "=" + " ".repeat(height-1)  ;
 }else {
     recordV = " ".repeat(i-1) + "=" + " ".repeat(2*height-1-2*i) + "=" + " ".repeat(i-1)
 }

 //E
 if( i == 1 ||  i == height|| i == Math.trunc(height / 2 +1 )){
    recordE =  "=".repeat(height);
 }else {
     recordE =  "="+ " ".repeat(height-1);
 }

 shape += recordL + space + recordO + space + recordV + space + recordE + "\n";
}
 console.log(shape);

