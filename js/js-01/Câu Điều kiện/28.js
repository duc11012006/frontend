// let totalSale = 300;
// let commission;

// if (totalSale <= 100) {
//   commission = totalSale * 0.05;
// } else if (totalSale <= 300) {
//   commission = 10 + (totalSale - 100) * 0.1;
// } else {
//   commission = 30 + (totalSale - 300) * 0.2;
// }

// console.log(`Hoa hồng: ${commission.toFixed(1)}$`);

let totalSale = 90;
let commission;

if(totalSale <= 100) {
  commission = totalSale * 0.05;
}else if( totalSale <=300) {
  commission = totalSale * 0.1;
}else{
  commission = 30 + (totalSale + 300) * 0.2;
}

console.log(`Hoa hồng: ${commission.toFixed(1)}$`);