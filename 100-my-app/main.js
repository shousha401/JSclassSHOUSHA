
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

  return {
    name: name,
    age: age,
    hasDriverLicense: hasDriverLicense,
    decision: [canRentCar, isNameMatch, isTeenager],
    decisionOutput: decisionOutput
  };
}

function updateDOM(userData) {
  let outputElement = document.getElementById("output");


  outputElement.innerHTML = "";

  
  for (let key in userData) {
    if (key === "decisionOutput") {
      let decisionElement = document.createElement("p");
      decisionElement.textContent = userData[key];
      outputElement.appendChild(decisionElement);
    } else {
      let dataElement = document.createElement("p");
      dataElement.textContent = `${key}: ${userData[key]}`;
      outputElement.appendChild(dataElement);
    }
  }
}

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let hasDriverLicense = document.getElementById("hasDriverLicense").checked;

  let userData = processUser(name, age, hasDriverLicense);
  updateDOM(userData);
});