let listItems = document.getElementsByClassName("content");
console.log(listItems);



for(let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML =  formatText(listItems[i].innerText);
}

function formatText (text) {
    let result = "";
    let arrText = text.split(' '); 
    arrText.splice(5, 0, '<span class="dots">...</span><span class="more">');
    arrText.push('</span>');
    result = arrText.join (" ") + ""; 


    return result;
}

for(let i = 0; i < listItems.length; i++){
    let color ="#282846";
    if(i % 2 == 0) {
        color = "#007580";
    }
    listItems[i].style.background = color;
}
console.log(listItems);


// function showText  (elm) {
//     let elementP = elm.parentElement.childNodes[1];
//     let spanMore = elementP.childNodes[2];
//     spanMore.style.display = "inline";
// }


function formatText (text) {
    let result = "";
    let arrText = text.split(' '); 
    arrText.splice(5, 0, '<span class="dots">...</span><span class="more">');
    arrText.push('</span>');
    result = arrText.join (" ") + ""; 


    return result;
}

function showText(elm) {
    let elementP = elm.parentElement.querySelector('.content');
    let spanMore = elementP.querySelector('.more');
    let dots = elementP.querySelector('.dots');

    if (spanMore.style.display === "inline") {
        spanMore.style.display = "none";
        dots.style.display = "inline";
        elm.innerHTML = "Read more";
    } else {
        spanMore.style.display = "inline";
        dots.style.display = "none";
        elm.innerHTML = "Read less";
    } 
}

