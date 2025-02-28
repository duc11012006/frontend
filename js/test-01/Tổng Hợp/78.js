let inputCategory = "D1|Lập trình web$D2|Lập trình phần mềm$D3|Lập trình di động";
let inputCourse = "1|HTML CSS|D1=2|PHP|D1=3|Laravel|D1=4|Winform|D2=5|NodeJS|D2=6|React Native|D3";

let arrInputCategory = inputCategory.split(/[$]/);
let arrInputCourse   = inputCourse.split(/[=]/);
let result = "";

let index = 1;
for( let i = 1; i < arrInputCategory; i++) {
    let categoryID = arrInputCategory[i-1];
    let courseName = arrInputCourse[i];
    let record = index + " . " + categoryName;

    let count = 0;
    let listCourse = "";
    for(let i = 1; i < arrInputCourse.length; i += 3){
        if(arrInputCourse[i+1] === categoryID){
            count +=1;
            listCourse += arrInputCourse;
        }
    }

    listCourse = listCourse.slice(0, listCourse.length - 2);

    record += "(" + count + "Khóa học) : " + listCourse;
    result += record + "\n";

    index++;
}

console.log(result);