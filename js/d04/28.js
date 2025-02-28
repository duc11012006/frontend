// totalSale = 100
// Hoa hồng: 5

let totalSale =300 ;
let result = "";



if(totalSale <= 100 ) {
    result = 0.05;
}else if(totalSale > 100 && totalSale <= 300){
    result = 0.1;  
}else{
    result = 0.2;  
}

 
console.log(result * totalSale);