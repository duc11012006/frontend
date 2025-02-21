let inputName = "abw=java;def=android;nfv=php;";
let inputTime = "abw=9920;nfv=240;def=1990";

let courseTime = 0;
let indexFind = 1;
let courseID =  "";
let courseName = "";

let arrInputTime = inputTime.split(/[=;]/);

for(let i = 1; i < arrInputTime.length; i +=2) {
    let currentTime = parseInt(arrInputTime[i]);
    if(currentTime > courseTime) {
        courseTime = currentTime;
    }
}

courseID = arrInputTime[indexFind - 1];

let arrInputName = inputName.split(/[=;]/);

for(let i = 0; i < arrInputTime.length; i += 2) {
    let currentID = arrInputTime[i];
    if(currentID === courseID) {
        courseName = arrInputTime[i + 1];
        break;
    }
}

console.log(`Course Id: ${courseID} - Course Name: ${courseName} - Course Time: ${courseTime}`);