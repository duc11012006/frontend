let yourNumber = 2;

let getyourNumber = (yourNumber) => {
    let result = "Mua Dong";


    if (yourNumber >= 2 &&  yourNumber <= 4) {
        result = `Mua Xuan`;
    }

    else if (yourNumber >= 5 && yourNumber <= 7) {
        result = `Mua Ha`;
    }

    else if (yourNumber >= 8 && yourNumber <= 10) {
        result = `Mua Thu`;
    }


    return result;


}

console.log(getyourNumber(yourNumber));