let btnBlack = document.getElementById ("Black");
let btnBlue = document.getElementById ("Blue");
let btnYellow = document.getElementById ("Yellow");
let elmContent = document.getElementById ("content");
let arrColor = ["#3089cf" , "#f0ff00" , "#101101", "#32ff00" ];

function changeColor(color, elm) {

    elmContent.style.color = color;
    let index = getRandomInt(arrColor.length);
    let backgroundColor = arrColor [index];
    elmContent.style.background = (backgroundColor);
    console.log(arrColor[index]);
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function changeTextAlign(position) {
    console.log(position);
    elmContent.style.textAlign = position;
}
