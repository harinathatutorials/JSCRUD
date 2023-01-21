function loadUsers() {
  userList = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  console.log(userList);
  var tableData = document.getElementById("bodyContent");
  tableData.innerHTML = ``;
  if (userList.length >= 1) {
    userList.forEach(function (value, i) {
      tableData.innerHTML += `<tr>
                <td>${i + 1}</td>
                <td>${value.name}</td>
                <td>${value.fname}</td>
                <td>${value.age}</td>
                <td>${value.phn}</td>
                <td><i class='fa fa-edit' onclick="update(${
                    value.id
                  })"></td>
                <td><i class='fa fa-trash' onclick="removeUser(${
                  value.id
                })"></td>`;
    });
  } else {
    tableData.innerHTML += `<tr><td colspan='6'> No Records To Display</td></tr>`;
  }
}

