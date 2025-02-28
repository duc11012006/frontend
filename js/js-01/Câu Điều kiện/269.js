let age = 90;

function getAge(age){

}
let getage= (age) => {
    let result = "";


    if (age <= 11) {
        result = `Thieu nhi`;
    }

    else if (age <= 25) {
        result = `Thieu nien`;
    }

    else if (age <=50) {
        result = `Trung nien `;
    }

    else if (age > 50) {
        result = `Lao nien`;
    }

    return result;
}

console.log(getage(age));