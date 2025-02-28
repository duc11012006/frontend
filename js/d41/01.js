// function print(name,age,times) {
//     let result ="";
//     for(let i = 1; i <= times; i++){
//         result += "Hello" + name + "your age :" + age + "\n";
//     }
//     return result;

// }

// let result = print(" Lân ", 35,4);
// // console.log(result);




// function createListNumber(star,end,character) {
//     let result = "";
//     for(let i = star; i <= end; i++) {
//         result += i + character ;
//     }
//     result = result.slice(0,-1);
//     return result;
// }

// console.log(createListNumber(1,9, "+"));
// console.log(createListNumber(2,5, "-"));
// console.log(createListNumber(4,8, "0"));


// function createListNumberDesc (end, start, step ) {
//     let result = "";
//     for(let i = end; i >= start ; i -= step) {
//         result += i;
//     }

//     return result;
    
// }   

// console.log(createListNumberDesc(19, 15, 2));
// console.log(createListNumberDesc(10, 2, 3));


// function createRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(createRandomNumber(1,9));


function createRandomString(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(createRandomString(7));