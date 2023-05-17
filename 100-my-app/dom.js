import { editUser, deleteUser } from './user.js';
import { saveData } from './storage.js';
import { processUser } from './user.js';

export function updateDOM(userData) {
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
    licenseElement.textContent = `Has Driver's License: ${user.hasDriverLicense ? "Yes" : "No"}`;
    userDiv.appendChild(licenseElement);

    let decisionElement = document.createElement("p");
    decisionElement.textContent = `Decision: ${user.decisionOutput}`;
    userDiv.appendChild(decisionElement);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      editUser(userData, i);
    });
    userDiv.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteUser(userData, i);
    });
    userDiv.appendChild(deleteButton);

    outputElement.appendChild(userDiv);
  }
}

export function initializeForm(userData) {
  let nameInput = document.getElementById("name");
  let ageInput = document.getElementById("age");
  let hasDriverLicenseInput = document.getElementById("hasDriverLicense");

  nameInput.value = "";
  ageInput.value = "";
  hasDriverLicenseInput.checked = false;
}

export function addFormSubmitListener(userData) {
  document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document
.getElementById("name").value;
let age = document.getElementById("age").value;
let hasDriverLicense = document.getElementById("hasDriverLicense").checked;
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
  userData[editIndex] = processUser(name, age, hasDriverLicense);
} else {
  let newUser = processUser(name, age, hasDriverLicense);
  userData.push(newUser);
}

updateDOM(userData);

initializeForm(userData);
saveData('userData', userData);
});
}