let btnDecrease = document.getElementById ("btn-decrease");
let btnReset = document.getElementById ("btn-reset");
let btnIncrease = document.getElementById ("btn-increase");
let btnSave = document.getElementById ("btn-save");


btnDecrease.addEventListener("click", function() {
        let number = parseInt (elmNumber.innerText);
        number = number -1 ;
        elmNumber.innerText = number;
    });

  btnReset.addEventListener("click", function() {
        let number = parseInt (elmNumber.innerText);
        number = 0;
        elmNumber.innerText = number;
    });

   btnIncrease.addEventListener("click", function() {
        let number = parseInt(elmNumber.innerText);
        number = number +1 ;
        console.log(number);
        elmNumber.innerText = number;
    });

   btnSave.addEventListener("click", function() {
        let number = parseInt (elmNumber.innerText);
        elmNumber.innerText = 0; 
        let str = number + "#";
        elmSave.innerText = elmSave.innerText + str;
    });