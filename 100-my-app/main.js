
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

  return [
    {
      name: name,
      age: age,
      hasDriverLicense: hasDriverLicense,
      decision: [canRentCar, isNameMatch, isTeenager],
      decisionOutput: decisionOutput,
    },
  ];
}

function updateDOM(userData) {
  let outputElement = document.getElementById("output");
  outputElement.innerHTML = "";

  for (let user of userData) {
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

    outputElement.appendChild(userDiv);
  }
}



document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let hasDriverLicense = document.getElementById("hasDriverLicense").checked;

 
  if (!name || !age) {
    alert("Please fill in all required fields.");
    return;
  }

 
  age = parseInt(age);

  
  let userData = processUser(name, age, hasDriverLicense);
  
  updateDOM(userData);

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("hasDriverLicense").checked = false;
});

