let id  = "69"
let str = "69,  1,   69 , 169 ";
let count = 0;

str = str.replace(/\s/g, "");
let idArr = str.split(",");

for(let i = 0; i < idArr.length; i++) {
    if(idArr[i] == id) {
        count++;
    }
}

console.log(`ID ${id} xuất hiện: ${count}`);