let yourNumber = 157;

let getyourNumber= (yourNumber) => {
    let result = "";
    let price = 0;
    let percent = 1;
    let strPercent = "";


    if (yourNumber <= 1) {
        price = 15000;
    }

    else if ( yourNumber  <= 5) {
        price = 13500;
    }

    else if (yourNumber > 5 && yourNumber <= 120) {
        price = 11000;
    }

    else if (yourNumber > 120) {
        price = 11000;
        strPercent =" x 90%";
        percent = 90/100;
    }

    result = price + " x " +  yourNumber + strPercent + " = " + (price * yourNumber * percent) + " vnđ ";
    

    return result;
}

console.log(getyourNumber(yourNumber));