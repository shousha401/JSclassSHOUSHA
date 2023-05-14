const formEl = document.getElementById('form')
const output = document.getElementById('output')

function updateDom(message, el) {
  const newEl = document.createElement(el)
  newEl.textContent = message
  output.appendChild(newEl)
}

function startWorkout(type, reps, time, fn) {
  return new Promise((resolve, reject) => {
    fn(`start ${type} <> goal reps is ${reps}`, 'p')

    setTimeout(() => {
      fn(`stop ${type}`, 'h1')
      resolve(); 
    }, time * 1000)
  });
}

formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const type = e.target.type.value
  const reps = parseFloat(e.target.reps.value)
  const time = parseFloat(e.target.time.value)

  startWorkout(type, reps, time, updateDom)
    .then(() => {
      formEl.reset(); 
    })
    .catch((error) => {
      console.error(error); 
    });
});


