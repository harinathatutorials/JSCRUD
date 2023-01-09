function removeUser(val) {
  console.log(val);
  console.log("user Clicked");

  userList = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  console.log("beforeDelete", userList);
  // userList = userList.filter(function(item){
  //     return item.id != val;
  // });
  let objIndex = userList
    .map(function (x) {
      return x.id;
    })
    .indexOf(val);
  console.log(objIndex);
  userList.splice(objIndex, 1);

//   userList.forEach((element) => {});

   console.log("afterDelete", userList);
 localStorage.setItem("users", JSON.stringify(userList));
    loadUsers();
alert("succeffuly deleted");
}
