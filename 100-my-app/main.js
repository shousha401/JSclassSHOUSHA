
let name = "Alice";
let age = 25;
let hasDriverLicense = true;

// Calculate whether the person is eligible to rent a car
let canRentCar = age >= 25 && hasDriverLicense;

// Compare the person's name with a specified string
let isNameMatch = name === "Bob" || name === "Alice";

// Check if the person is a teenager
let isTeenager = age >= 13 && age <= 19;

// Display the decision output based on the variables
if (canRentCar) {
  console.log(`${name} can rent a car.`);
} else {
  console.log(`${name} cannot rent a car.`);
}

if (isNameMatch) {
  console.log(`The name ${name} matches.`);
} else {
  console.log(`The name ${name} does not match.`);
}

if (isTeenager) {
  console.log(`${name} is a teenager.`);
} else {
  console.log(`${name} is not a teenager.`);
}

function processUser(name, age, hasDriverLicense) {
  let canRentCar = age >= 25 && hasDriverLicense;
  let isNameMatch = name === "Bob" || name === "Alice";
  let isTeenager = age >= 13 && age <= 19;

  return {
    name: name,
    age: age,
    hasDriverLicense: hasDriverLicense,
    decision: [canRentCar, isNameMatch, isTeenager]
  };
}

function updateDOM(userData) {
  let outputElement = document.getElementById("output");

  // Clear previous content
  outputElement.innerHTML = "";

  // Create a paragraph element for each piece of data
  for (let key in userData) {
    let dataElement = document.createElement("p");
    dataElement.textContent = `${key}: ${userData[key]}`;
    outputElement.appendChild(dataElement);
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

