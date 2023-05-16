
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

  
  let table = document.createElement("table");

  for (let key in userData) {
    
    let row = document.createElement("tr");

    
    let keyCell = document.createElement("td");
    keyCell.textContent = key;
    row.appendChild(keyCell);

    
    let valueCell = document.createElement("td");
    valueCell.textContent = userData[key];
    row.appendChild(valueCell);

    
    table.appendChild(row);
  }

  
  outputElement.appendChild(table);
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

