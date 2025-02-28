let inputCategory = "D1|Lập trình di động|D2|Lập trình phần mềm|D3|Lập trình nhúng";
let inputCourse = "1|Dart|D2|Golang|D1|Laravel|D1|Typescript|D2|NodeJS|D2|C/C++|D3";
let result = "";

let arrInputCategory = inputCategory.split(/[\|]/);
let arrInputCourse = inputCourse.split(/[\|]/);

let index = 1;
for (let i = 1; i < arrInputCategory.length; i += 2) {
    let categoryID = arrInputCategory[i - 1]; // D1
    let categoryName = arrInputCategory[i];  // Lập trình web
    let record = index + ". " + categoryName + " ";

    let count = 0;
    let listCourse = "";
    for (let j = 1; j < arrInputCourse.length; j += 3) {
        if (arrInputCourse[j] === categoryID) {
            count++;
            listCourse += arrInputCourse[j + 1] + ", ";
        }
    }

    listCourse = listCourse.slice(0, listCourse.length - 2);
    record += "(" + count + " khóa học): " + listCourse;

    result += record + "\n";
    index++;
}

console.log(result);
