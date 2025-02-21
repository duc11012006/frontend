let elmRed = document.getElementById ("red");
let elmYellow = document.getElementById ("yellow");
let elmGreen = document.getElementById ("green");
console.log (elmYellow)


function changeColor(color, elm) {
    let listButton = elm.parentElement.children;
    
    for(let i = 0; i < listButton.length; i++){
        listButton[i].style.border = "none";
    }
  
    elm.style.border = "4px solid blue";

    if (color == "red") {
        elmRed.style.backgroundColor = "red" ;
        elmYellow.style.backgroundColor = "rgb(56, 53, 53)";
        elmGreen.style.backgroundColor = "rgb(56, 53, 53)";
        
    }else if (color == "yellow") {
        elmYellow.style.backgroundColor = "yellow";
        elmGreen.style.backgroundColor = "rgb(56, 53, 53)";
        elmRed.style.backgroundColor = "rgb(56, 53, 53)";
    }else if (color == "green") {
        elmGreen.style.backgroundColor = "green";
        elmRed.style.backgroundColor = "rgb(56, 53, 53)";
        elmYellow.style.backgroundColor = "rgb(56, 53, 53)";
    }

}


// function changeColor(color, elm) {

//     for (let button of elm.parentElement.children) {
//         button.style.border = "none";
//     }
    
  
//     elm.style.border = "4px solid blue";

   
//     elmRed.style.backgroundColor = (color === "red") ? "red" : "rgb(56, 53, 53)";
//     elmYellow.style.backgroundColor = (color === "yellow") ? "yellow" : "rgb(56, 53, 53)";
//     elmGreen.style.backgroundColor = (color === "green") ? "green" : "rgb(56, 53, 53)";
// }

