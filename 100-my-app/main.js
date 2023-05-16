
let userData = [];

// Retrieve userData from local storage, if available
if (localStorage.getItem('userData')) {
  userData = JSON.parse(localStorage.getItem('userData'));
  updateDOM(userData);
}

function editUser(index) {
  let user = userData[index];
  document.getElementById("name").value = user.name;
  document.getElementById("age").value = user.age;
  document.getElementById("hasDriverLicense").checked = user.hasDriverLicense;
  userData.splice(index, 1);
  updateDOM(userData);
  saveData();
}

function deleteUser(index) {
  userData.splice(index, 1);
  updateDOM(userData);
  saveData();
}

function saveData() {
  localStorage.setItem('userData', JSON.stringify(userData));
}

function processUser(name, age, hasDriverLicense) {
  let canRentCar = age >= 21 && hasDriverLicense;
  let isNameMatch = name === "Bob" || name === "Alice";
  let isTeenager = age >= 13 && age <= 19;
  let decisionOutput = "";

  if (canRentCar) {
    decisionOutput = `${name} can rent a car.`;
  } else {
    decisionOutput = `${name} cannot rent a car.`;
  }

  let user = {
    name: name,
    age: age,
    hasDriverLicense: hasDriverLicense,
    decision: [canRentCar, isNameMatch, isTeenager],
    decisionOutput: decisionOutput,
  };

  let editIndex = -1;
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].name === name) {
      editIndex = i;
      break;
    }
  }

  if (editIndex !== -1) {
    userData[editIndex] = user;
  } else {
    userData.push(user);
  }

  updateDOM(userData);
  saveData();

  return [user];
}

function updateDOM(userData) {
  let outputElement = document.getElementById("output");
  outputElement.innerHTML = "";

  for (let i = 0; i < userData.length; i++) {
    let user = userData[i];
    let userDiv = document.createElement("div");
    userDiv.classList.add("user");

    let nameElement = document.createElement("h2");
    nameElement.textContent = user.name;
    userDiv.appendChild(nameElement);

    let ageElement = document.createElement("p");
    ageElement.textContent = `Age: ${user.age}`;
    userDiv.appendChild(ageElement);

    let licenseElement = document.createElement("p");
    licenseElement.textContent = `Has Driver's License: ${
      user.hasDriverLicense ? "Yes" : "No"
    }`;
    userDiv.appendChild(licenseElement);

    let decisionElement = document.createElement("p");
    decisionElement.textContent = `Decision: ${user.decisionOutput}`;
    userDiv.appendChild(decisionElement);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      editUser(i);
    });
    userDiv.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteUser(i);
    });
    userDiv.appendChild(deleteButton);

    outputElement.appendChild(userDiv);
  }
}

document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let hasDriverLicense = document
  .getElementById("hasDriverLicense").checked;

  if (!name || !age) {
  alert("Please fill in all required fields.");
  return;
  }
  
  age = parseInt(age);
  
  let editIndex = -1;
  for (let i = 0; i < userData.length; i++) {
  if (userData[i].name === name) {
  editIndex = i;
  break;
  }
  }
  
  if (editIndex !== -1) {
  userData[editIndex] = processUser(name, age, hasDriverLicense)[0];
  } else {
  let newUser = processUser(name, age, hasDriverLicense)[0];
  userData.push(newUser);
  }
  
  updateDOM(userData);
  
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("hasDriverLicense").checked = false;
  });

