let btnMenu = document.getElementById('dropdownMenu2');
let elmDisplay = document.getElementById('sort-display');
let btnAdd = document.getElementById('btn-toggle-form');
let elmForm = document.getElementById('area-form');
elmForm.style.display = 'none';
let isShow = false;
let btnCancel = document.getElementById('btn-cancel');
let btnSubmit = document.getElementById('btn-submit');
let inputName = document.getElementById('input-name');
let inputLevel = document.getElementById('input-level');
// let TODO_LIST = [{ id: 1, name: 'Gym', level: 0 }, { id: 2, name: 'Coding', level: 1 }, { id: 3, name: 'Play', level: 2 }];
let elmTaskList = document.getElementById('area-list-task');

let TODO_LIST = JSON.parse(localStorage.getItem("zendvn_todo_list"));
console.log(TODO_LIST);

renderList(TODO_LIST);

function renderList(arrayList) {
    let result = '';
    // let search = inputSearch.value;
    for (let i = 0; i < arrayList.length; i++) {

        let name = arrayList[i].name;
        let level = arrayList[i].level;
        let className = "";

        if (level == 0) {
            level = "Small";
            className = "bg-dark";
        } else if (level == 1) {
            level = "Medium";
            className = "bg-info";
        } if (level == 2) {
            level = "High";
            className = "bg-danger";
        }

        result += `<tr>
      <td>1</td>
      <td> ${name}</td>
      <td><span class="badge ${className}">${level}</span></td>
      <td>
          <button class="btn btn-warning btn-edit" data-id="NBIXr" onclick="funcEdit(${i})>Edit</button>
          <button class="btn btn-danger btn-delete" data-id="NBIXr" onclick="funcDelete(${i})" >Delete</button>
      </td>
  </tr>`;
    }
    elmTaskList.innerHTML = result;
}

function sortDisplay(elm, column, order) {
    let value = elm.innerText;
    elmDisplay.innerHTML = value.toUpperCase();
    if(column=="name" && order =="asc"){
        TODO_LIST.sort((a,b) => a.name.localeCompare(b.name)); 
    }else if (column=="name" && order =="desc"){
        TODO_LIST.sort((a,b) => b.name.localeCompare(a.name)); 
    }else if(column=="level" && order =="asc"){
        TODO_LIST.sort((a,b) => a.level.localeCompare(b.level)); 
    }else if(column=="level" && order =="desc"){
        TODO_LIST.sort((a,b) => b.level.localeCompare(a.level));
    }
    renderList(TODO_LIST);
}
btnAdd.addEventListener('click', function () {
    if (isShow == false) {
        elmForm.style.display = 'block';
        btnAdd.innerText = 'close';
        isShow = true;
    } else {
        elmForm.style.display = 'none';
        btnAdd.innerText = 'add';
        isShow = false;
        inputName.value = '';
    }
})
btnCancel.addEventListener('click', function () {
    elmForm.style.display = 'none';
    btnAdd.innerText = 'add';
    inputName.value = '';
})
btnSubmit.addEventListener('click', function () {
  
    let name = inputName.value;
    let level = inputLevel.value;

    if(name == "" && name.length < 3 ){
alert('Vui lòng nhập đúng thông tin');
        return;
    }else {
        TODO_LIST.push({name: name, level: level });
        renderList(TODO_LIST);
        localStorage.setItem("zendvn_todo_list", JSON.stringify(TODO_LIST));
    }
})


function funcDelete (index){
    TODO_LIST.splice(index,1);
    renderList(TODO_LIST);
    localStorage.setItem("zendvn_todo_list", JSON.stringify(TODO_LIST));
}


function funcEdit (index){
    idEdit = index;
    inputName.value = TODO_LIST[index];

    elmForm.style.display = "block";
    btnToggleForm.innerHTML = "Close";
    isShow = true;
    idEdit = index;
    
    inputName.value = TODO_LIST[index].name;
    inputLevel.value = TODO_LIST[index].level;
}
