// let arrInt = [2,2,6,2,3];
// // let result = arrInt.filter(function(item, pos) {
// //     return arrInt.indexOf(item) == pos;
// // })

// // console.log(result);

// result = [22]
// Di qua 2 => kiểm tra nó có trong result ko => ko co = > result = [2]
// Di qua 2 => kiểm tra nó có trong result ko => co = > continue
// Di qua 6 => kiểm tra nó có trong result ko => ko co = > result = [2,6]
// Di qua 2 => kiểm tra nó có trong result ko => co = > continue
// Di qua 3 => kiểm tra nó có trong result ko => ko co = > result = [2,6,3]

// for() {
//     if(kiem tra arrInt[i] con ton tai trong result == false) {
//         them arrInt[i] vao result;
//     }
// }





let arrInt = [3,5,2,7,2,7,2,8,0,8,3,6];
let result = [];


for(let i = 0; i < arrInt.length; i++) {
    if(!result.includes(arrInt[i])) {
        result.push(arrInt[i]);
    }
}

console.log(result);
    







