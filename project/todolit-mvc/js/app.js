let TODO_LIST = [{id: 1, name: "Gym", level: 0}, {id: 2, name: "Coding", level: 1}, {id:3, name: "Play", level: 2}]


let elmSortDisplay = document.getElementById("sort-display");
let btnToggleForm = document.getElementById("btn-toggle-form");
let elmForm = document.getElementById("area-form");
 isShow = false;
let btnCancel = document.getElementById("btn-cancel");
let btnSubmit = document.getElementById("btn-submit");
let inputName = document.getElementById("input-name");
let inputId = document.getElementById("input-id");
let inputLevel = document.getElementById("input-level");
let elmAreaListTask = document.getElementById("area-list-task");
let btnSearch = document.getElementById("btn-search");
let idEdit = -1;
renderList(TODO_LIST);

elmForm.style.display = "none";


function renderList (arrayList){

    let result = "";

    for(let i = 0; i < arrayList.length; i++){
         result += `<tr>
                            <td>1</td>
                            <td>${arrayList[i].name}</td>
                            <td><span class="badge bg-dark">${arrayList[i].level}</span></td>
                            <td>
                                <button onclick="funcEdit(${i})" class="btn btn-warning btn-edit" data-id="NBIXr">Edit</button>
                                <button onclick="funcDelete(${i})" class="btn btn-danger btn-delete" data-id="NBIXr">Delete</button>
                            </td>
                        </tr>`;
    }
    elmAreaListTask.innerHTML = result;
}


function sortDisplay (elm){
    let value = elm.innerText;
    value = value.toUpperCase();
    elmSortDisplay.innerText = value;
}


btnToggleForm.addEventListener('click', function(){

    if(isShow == false){  
        elmForm.style.display = "block";
        btnToggleForm.innerHTML = "Close";
        isShow = true;
    }else{
        elmForm.style.display = "none";
        btnToggleForm.innerHTML = "Add Task";
        isShow = false;
    }

});


btnCancel.addEventListener('click',function(){
    inputName.value = "";
    elmForm.style.display = "none";
    btnToggleForm.innerHTML = "Add Task";
    isShow = false;
})


btnSubmit.addEventListener('click', function() {
    console.log(inputLevel.value);
    console.log(inputName.value);


    let taskName = inputName.value.trim();
    
    if (taskName == "" && taskName.length < 3) {
        alert("Vui lòng nhập tên người dùng"); 
        return; 
    }

    if (idEdit === -1) {
        let newTask = {
            id: TODO_LIST.length + 1,
            name: taskName, 
            level: inputLevel.value
        };
        
        TODO_LIST.push(newTask);
    } 
    else {
        TODO_LIST[idEdit].name = taskName; 
        TODO_LIST[idEdit].level = inputLevel.value;
        
        idEdit = -1;
    } 
    elmForm.style.display = "none";
    btnToggleForm.innerHTML = "Add Task";
    isShow = false;

    
    renderList(TODO_LIST);
});


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


function funcDelete(index) {
    TODO_LIST.splice(index,1);
    renderList(TODO_LIST);
}

