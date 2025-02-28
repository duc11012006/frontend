let TODO_LIST = JSON.parse(localStorage.getItem("zendvn_todo_list")) || [];
let result = "";
let inputSearch = document.getElementById("inputSearch");
let inputTodo = document.getElementById("inputTodo");
let btnSearch = document.getElementById("btnSearch");
let btnClear = document.getElementById("btnClear");
let btnSort = document.getElementById("btnSort");
let btnAsc = document.getElementById("btnAsc");
let btnDesc = document.getElementById("btnDesc");
let btnCreate = document.getElementById("btnCreate");
let btnCancel = document.getElementById("btnCancel");
let elmTodoList = document.getElementById("todoList");
let idEdit = -1;



function renderList(arrayList) { 
    let result = "";
    let search = inputSearch.value;
    for (let i = 0; i < arrayList.length; i++) {
        let name = arrayList[i];
        name = name.replace(search, `<span class="hightlight">${search}</span>`);
        result += `<div class="todo-item">
          <span class="todo-name">${name}</span>
           <div class="todo-action">
            <button class="btn bg-warning"onclick="funcEdit(${i})">Edit</button>
            <button class="btn bg-danger" onclick="funcDelete(${i})">Delete </button>
          </div>
         </div>`;
    }
elmTodoList.innerHTML= result;
}

renderList(TODO_LIST)

function funcDelete(index) {
    TODO_LIST.splice(index, 1);
    renderList(TODO_LIST);
    localStorage.setItem("zendvn_todo_list", JSON.stringify(TODO_LIST));
}


function funcEdit (index){
    idEdit = index;
    btnCreate.innerText = 'Edit';
    inputTodo.value = TODO_LIST[index];
}


btnCreate.addEventListener('click', function (){
    let name =inputTodo.value;
    name = name.trim(String);
    if(name != "" && name.length > 3){
        if(idEdit == -1){
            TODO_LIST.push = name;
        }else{
            TODO_LIST[idEdit] = name;
            idEdit == -1;
            btnCreate.innerText = 'Create';
        }
        renderList(TODO_LIST);
        inputTodo.value = "";
    }else{
        alert = "Nhập đúng thông tin";
    }
    ocalStorage.setItem("zendvn_todo_list", JSON.stringify(TODO_LIST));
});


btnCancel.addEventListener('click', function (){
    inputTodo.value = "";
    btnCreate.innerText ='Create';
    idEdit = -1;
});

btnSearch.addEventListener('click', function (){
    let search = inputSearch.value;
    let arrSearch = TODO_LIST.filter(function (str) { return str.includes(search); });

    renderList(arrSearch)
});


let originalTODO_LIST = [...TODO_LIST];

btnSort.addEventListener('click', function() {
  TODO_LIST = [...originalTODO_LIST];
  renderList(TODO_LIST);
  localStorage.setItem("zendvn_todo_list", JSON.stringify(TODO_LIST));
});


btnAsc.addEventListener('click', function() {
  TODO_LIST.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  renderList(TODO_LIST);
  localStorage.setItem("zendvn_todo_list", JSON.stringify(TODO_LIST));
});


btnDesc.addEventListener('click', function() {
  TODO_LIST.sort((a, b) => {
      return b.toLowerCase().localeCompare(a.toLowerCase());
  });
  renderList(TODO_LIST);
  localStorage.setItem("zendvn_todo_list", JSON.stringify(TODO_LIST));
});
