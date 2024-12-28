let btnTextwhitebtninfo = document.getElementById("addUser");
let inputUsername = document.getElementById("username");
let elmRecordsTable = document.getElementById("records");
let userList = JSON.parse(localStorage.getItem("user_list")) || [];

renderUserList();

function renderUserList() {
    elmRecordsTable.innerHTML = ""; 

    userList.forEach((user, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${user}</td>
            <td>
                <i class="btn text-white fa fa-edit btn-info mx-2" onclick="editUser(${index})"></i>
                <i class="btn btn-danger text-white fa fa-trash" onclick="deleteUser(${index})"></i>
            </td>
        `;
        elmRecordsTable.appendChild(row);
    });
}

btnTextwhitebtninfo.addEventListener("click", function () {
    let username = inputUsername.value.trim();

    if (username != "" && username.length < 3) {
        alert("Vui lòng nhập tên người dùng.");
        return;
    }

    userList.push(username); 
    inputUsername.value = ""; 

    localStorage.setItem("user_list", JSON.stringify(userList));
    renderUserList(); 
});



function deleteUser(index) {
        userList.splice(index, 1); 
        localStorage.setItem("user_list", JSON.stringify(userList));
        renderUserList(); 
}


function editUser(index) {
    let name = prompt("Nhập tên mới:", userList[index]);

    if (name === null) {
        return;
    }

    if (name.trim() !== "") {
        userList[index] = name.trim();
        localStorage.setItem("user_list", JSON.stringify(userList));
        renderUserList();
    } 

    else {
        alert("Tên không hợp lệ!");
    }
}








