let elmNumber= document.getElementById ("number") ;
let elmSave = document.getElementById ("saved-number") ;
function increment() {
    let number = parseInt(elmNumber.innerText);
    number = number +1 ;
    console.log(number);
    elmNumber.innerText = number;
}

function decrement () {
    let number = parseInt (elmNumber.innerText);
    number = number -1 ;
    elmNumber.innerText = number
}

function reset () {
    let number = parseInt (elmNumber.innerText);
    number = 0;
    elmNumber.innerText = number
}

function save () {
    let number = parseInt (elmNumber.innerText);
    elmNumber.innerText = 0; 
    let str = number + "#";
    elmSave.innerText = elmSave.innerText + str;
}

