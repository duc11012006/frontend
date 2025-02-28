let str = "ab@#AB69C!+-21";

let numberOnly = str.replace(/[^0-9]/g, "");
let characterOnly = str.replace(/[^A-Za-z]/g, "");
let specialOnly = str.replace(/[A-Za-z0-9]/g, "");

console.log(`Chuỗi số: ${numberOnly}`);
console.log(`Chuỗi chữ: ${characterOnly}`);
console.log(`Chuỗi đặc biệt: ${specialOnly}`);