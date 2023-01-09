function update(val) {
  console.log("I am in Updated");
  userList = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  userList.forEach((element) => {
    if (element.id == val) {
      console.log(element);
      document.getElementById("name").value = element.name;
      document.getElementById("age").value = element.age;
      document.getElementById("fname").value = element.fname;
      document.getElementById("phn").value = element.phn;
      document.getElementById("id").value = element.id;
    }
  });
}
