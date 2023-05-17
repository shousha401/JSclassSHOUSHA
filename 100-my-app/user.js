export function processUser(name, age, hasDriverLicense) {
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

  return user;
}

export function editUser(userData, index) {
  let user = userData[index];
  document.getElementById("name").value = user.name;
  document.getElementById("age").value = user.age;
  document.getElementById("hasDriverLicense").checked = user.hasDriverLicense;
  userData.splice(index, 1);
  updateDOM(userData);
  saveData();
}

export function deleteUser(userData, index) {
  userData.splice(index, 1);
  updateDOM(userData);
  saveData();
}