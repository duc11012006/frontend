let inputName = "abw=nodejs;def=javascript;nfv=reactjs;";
let inputTime = "abw=120;nfv=410;def=590;";

let courseTime = 0;
let indexFind = 1;
let courseID = "";
let courseName = "";

// Tách dữ liệu thời gian
let arrInputTime = inputTime.split(/;|=/);

for (let i = 1; i < arrInputTime.length; i += 2) {
    let currentTime = parseInt(arrInputTime[i]);
    if (currentTime > courseTime) {
        courseTime = currentTime;
        indexFind = i;
    }
}

courseID = arrInputTime[indexFind - 1]; // Tìm ID có thời gian lớn nhất

// Tách dữ liệu tên khóa học
let arrInputName = inputName.split(/;|=/);

for (let i = 0; i < arrInputName.length; i += 2) {
    let currentID = arrInputName[i];
    if (currentID === courseID) {
        courseName = arrInputName[i + 1]; // Tìm tên khóa học
    }
}

console.log(courseName);
