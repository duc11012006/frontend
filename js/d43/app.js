let inputMin = document.getElementById("min");
let inputMax = document.getElementById("max");
let btnGenerate = document.getElementById("btn-generate");
let inputResult = document.getElementById("result");


// btnGenerate.addEventListener('click',function (){

//     let min = parseInt(inputMin.value) ;
//     let max = parseInt(inputMax.value);

//     if( isNaN(min) || isNaN (max)) {
//         alert("Phải nhập đủ thông tin min và max");
//     }else{
//         if(min > max) {
//             alert("Min phải nhỏ Max");
//         }else{
//                let result = createRandomNumber(min, max);
//             inputResult.value = result;
//         }
//     }

//     console.log(min);
// });

// function createRandomNumber (min,max,result) {
//     return Math.floor (Math.random() * (max-min+1)+min);
// }


btnGenerate.addEventListener('click', function (){
    let min = parseInt(inputMin.value);
    let max = parseInt(inputMax.value);

    if( isNaN(min) || isNaN(max)) {
        alert("Phải nhập đủ thông tin min và max")
    }else{
        if(min > max){
            alert("Min phải nhỏ Max");
        }else{
            let result = createRandomNumber(min,max)
            inputResult.value = result;
        }
    }
});


 function createRandomNumber (min,max,result) {
     return Math.floor (Math.random() * (max-min+1)+min);
}