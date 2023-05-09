
let users = [];
let userIdCounter = 0;
let maxAge = 60;

function addUser() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
 

  if (name && age && email) {
    let user = {
      id: ++userIdCounter,
      name: name,
      age: parseInt(age),
      email: email
    };
    users.push(user);
    updateTable();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    updateTable();
  } else {
    alert("Please fill out all fields");
  }
}

function deleteUser(id) {
  let index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    updateTable();
  }
}

function updateTable() {
  let table = document.getElementById("user-table");
  table.innerHTML = "";

  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <th>Name</th>
    <th>Age</th>
    <th>Email</th>
    <th>Action</th>
  `;
  thead.appendChild(tr);
  table.appendChild(thead);

  let tbody = document.createElement("tbody");
  users.forEach(user => {
    if (user.age > maxAge || user.email.endsWith(".edu")) {
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td><button type="button" onclick="deleteUser(${user.id})">Delete</button></td>
      `;
      tbody.appendChild(tr);
    }
  });
  table.appendChild(tbody);
}

users.push({
  id: ++userIdCounter,
  name: "John Doe",
  age: 25,
  email: "johndoe@example.com"
});
