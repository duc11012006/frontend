let btnFontSizeDecrease = document.getElementById(`btnFontSizeDecrease`);
let btnFontSizeIncrease = document.getElementById(`btnFontSizeIncrease`);

let inputNumberOne = document.getElementById(`inputLineHeight`);

let btnBackgroundbtnlight = document.getElementById(`btn-light`);
let btnBackgroundbtngold = document.getElementById(`btn-gold`);
let btnBackgroundbtndark = document.getElementById(`btn-dark`);
let elmContainer = document.getElementById(`content`);

let inputColor = document.getElementById(`inputColor`);

let inputLineHeight = document.getElementById(`inputLineHeight`);
let elmLabel = document.getElementById(`lineHeightDisplayValue`);
let textAlignSelect = document.getElementById('slbTextAlign');






// let backgroundColor = localStorage.getItem("backgroundColor");
// elmContainer.style.background = backgroundColor ;


// let buttonClickID = localStorage.getItem("button-click");
// let buttonClicked = document.getElementById(buttonClickID);
// buttonClicked.style.border = "4px solid blue";



// let color = localStorage.getItem("color");
// elmContainer.style.color = color;
// inputColor.value = color;

// let height = localStorage.getItem("height");
// elmContainer.style.lineHeight = height;
// inputLineHeight.value = height;
// elmLabel.innerText = height;


// let fontSize = localStorage.getItem("fontSize");
// elmContainer.style.fontSize = fontSize + "px";


// let selectedAlignment = localStorage.getItem("selectedAlignment");
// elmContainer.style.textAlign = selectedAlignment;
// textAlignSelect.value = selectedAlignment;




textAlignSelect.addEventListener('change', () => {
    let selectedAlignment = textAlignSelect.value;
    elmContainer.style.textAlign = selectedAlignment;
    localStorage.setItem("selectedAlignment", textAlignSelect.value);
 });


function changeBackgroundColor (elm,color) {
    let backgroundColor = window.getComputedStyle( elm,null).getPropertyValue('background-color');  
    elmContainer.style.background =backgroundColor ;
    localStorage.setItem("backgroundColor", backgroundColor);
    console.log(elm.id);
    localStorage.setItem("button-click", elm.id);

    let listButton = elm.parentElement.children;
    
    for(let i = 0; i < listButton.length; i++){
        listButton[i].style.border = "none";
    }
  
    elm.style.border = "4px solid blue";
}


inputColor.addEventListener('input', function () {
    let color = inputColor.value;
    elmContainer.style.color = color ;
    localStorage.setItem("color", inputColor.value);
  });


inputLineHeight.addEventListener('input', function () {
    let lineHeight = inputLineHeight.value;
    elmContainer.style.lineHeight = lineHeight ;
    elmLabel.innerText = lineHeight;
    localStorage.setItem("height", inputLineHeight.value);
    elmContainer.innerText
  });


btnFontSizeDecrease.addEventListener('click', function () {
    changeFontSize("-");
  });


btnFontSizeIncrease.addEventListener('click', function () {
    changeFontSize("+");
    
});

function changeFontSize(action) {
    let fontSize = window.getComputedStyle( elmContainer,null).getPropertyValue('font-size'); 
    fontSize = parseInt(fontSize) ;
    localStorage.setItem("fontSize", fontSize);

    if(action == "+") {
        fontSize = fontSize + 1;
    }else if(action == "-") { 
        fontSize = fontSize - 1;
    }
    elmContainer.style.fontSize = fontSize + "px";
}