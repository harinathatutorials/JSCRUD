function add() {
  userList = [];

  userList = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  console.log(userList);
  var id;
  userList.length == 0 ? (id = 0) : userList.findLast((item) => (id = item.id));
  console.log(id);

  if (document.getElementById("id").value) {
    userList.forEach((element) => {
      if (element.id == document.getElementById("id").value) {
        element.name = document.getElementById("name").value;
        element.fname = document.getElementById("fname").value;
        element.phn = document.getElementById("phn").value;
        element.age = document.getElementById("age").value;
      }
    });
    alert('Data Updated Succffully');
  } else {
    userObj = {
      id: id + 1,
      name: document.getElementById("name").value,
      fname: document.getElementById("fname").value,
      phn: document.getElementById("phn").value,
      age: document.getElementById("age").value,
    };
    console.log(userObj);
    userList.push(userObj);
    alert('User Created Succffully');
  }

  localStorage.setItem("users", JSON.stringify(userList));

  loadUsers();
  document.getElementById("form").reset();
}
function clearForm() {
  document.getElementById("form").reset();
}
