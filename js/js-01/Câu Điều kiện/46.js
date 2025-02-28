// let totalLine = 50;
// let timeDoing = 4;
// let salary;

// if (totalLine <= 10) {
//   salary = totalLine * 1;
// } else if (totalLine <= 20) {
//   salary = 10 * 1 + (totalLine - 10) * 2;
// } else {
//   salary = 10 * 1 + 10 * 2 + (totalLine - 20) * 5;
// }

// console.log(`Salary: ${salary}$`) ;

let totalLine = 50;
let timeDoing = 4;
let salary;

if(totalLine <= 10){
  salary = totalLine *1;
}else if(totalLine <= 20){
  salary = 10 * 1 + (totalLine - 10) * 2;
}else{
  salary = 10 * 1 + (totalLine - 20) * 5;
}

console.log(`Salary: ${salary}$`);
