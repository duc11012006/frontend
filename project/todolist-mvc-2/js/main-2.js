let inputSearch = document.getElementById("input-search");
let btnSearch = document.getElementById("btn-search");
let btnMenu = document.getElementById('dropdownMenu2');
let elmDisplay = document.getElementById('sort-display');
let btnAdd = document.getElementById('btn-toggle-form');
let elmForm = document.getElementById('area-form');
elmForm.style.display = 'none';
let isShow = false;
let btnCancel = document.getElementById('btn-cancel');
let btnSubmit = document.getElementById('btn-submit');
let btnDelete = document.getElementsByClassName('btn-delete');
let inputName = document.getElementById('input-name');
let inputLevel = document.getElementById('input-level');
let TODO_LIST = JSON.parse(localStorage.getItem("project_todo_list")) || [];
let elmTaskList = document.getElementById('area-list-task');
let idEdit = -1;
renderList(TODO_LIST);

function renderList(arrayList) {
    let result = "";
    let search = inputSearch.value;
    for (let i = 0; i < arrayList.length; i++) {
        let name = arrayList[i].name;
        let level = arrayList[i].level;
        let bgColor = "";

        if (level == 0) {
            level = "Small";
            bgColor = 'bg-dark';
        }

        if (level == 1) {
            level = "Medium";
            bgColor = 'bg-info';
        }

        if (level == 2) {
            level = "High";
            bgColor = "bg-dnager";
        }

        name = name.replace(search, `<span class="hightlight">${search}</span>`);

        result += `<tr>       
        <td>1</td>
        <td>${name}</td>
        <td><span class="badge ${bgColor}">${level}</span></td>
        <td>
            <button class="btn btn-warning btn-edit" data-id="NBIXr" onclick="funcEdit(${i})">Edit</button>
            <button class="btn btn-danger btn-delete" data-id="NBIXr" onclick="funcDelete(${i})">Delete</button>
        </td>
    </tr>`;
    }
    elmTaskList.innerHTML = result;
}


function sortDisplay(elm, column, order) {
    let value = elm.innerText;
    elmDisplay.innerHTML = value.toUpperCase();
    if (column == "name" && order == "asc") {
        TODO_LIST.sort((a, b) => a.name.localeCompare(b.name));
    } else if (column == "name" && order == "desc") {
        TODO_LIST.sort((a, b) => b.name.localeCompare(a.name));
    } else if (column == "level" && order == "asc") {
        TODO_LIST.sort((a, b) => a.level - b.level);
    } else if (column == "level" && order == "desc") {
        TODO_LIST.sort((a, b) => b.level - a.level);
    }
    renderList(TODO_LIST)
}


btnAdd.addEventListener('click', function(){
    if(isShow == false){
        elmForm.style.display = "block";
        btnAdd.innerHTML = "Close";
        isShow = true;
    }else{
        elmForm.style.display = "none";
        btnAdd.innerHTML = "ADD TASK";
        isShow = false;
        inputName.value = "";
    }
});


btnCancel.addEventListener('click', function(){
    elmForm.style.display = "None";
    btnAdd.innerHTML = "ADD TASK";
    inputName.value = "";
});


btnSubmit.addEventListener('click', function () {
    let name = inputName.value;
    let level = inputLevel.value;

    if (name != '' && name.length > 2) {
        if (idEdit === -1) {
            TODO_LIST.push({ name: name, level: level });
        } else {
            TODO_LIST[idEdit] = { name: name, level: level };
            idEdit = -1;
        }
        renderList(TODO_LIST);
        elmForm.style.display = 'none';
        btnAdd.innerText = 'ADD TASK';
        isShow = false;
    } else {
        alert('Tên phải có ít nhất 3 ký tự');
    }
    localStorage.setItem("project_todo_list", JSON.stringify(TODO_LIST));
    inputName.value = '';
});


function funcDelete (index){
    TODO_LIST.splice(index,1);
    renderList(TODO_LIST);
    localStorage.setItem("project_todo_list", JSON.stringify(TODO_LIST));
}


function searchTasks(keyword) {
    let filteredList = TODO_LIST.filter(item => {
        return item.name.toLowerCase().includes(keyword.toLowerCase());
    });
    renderList(filteredList);
}

btnSearch.addEventListener('click', function() {
    let keyword = inputSearch.value;
    searchTasks(keyword);
});


inputName.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') btnSubmit.click();
    if (event.key == 'Escape') btnCancel.click();
});