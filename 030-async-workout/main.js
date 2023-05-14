const formEl = document.getElementById('form');
const output = document.getElementById('output');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const type = e.target.elements.type.value;
  const reps = parseFloat(e.target.elements.reps.value);
  const time = parseFloat(e.target.elements.time.value);

  formEl.reset();

  displayExerciseInfo(type, reps, function() {
    performAsyncUpdate(time);
  });
});

function displayExerciseInfo(type, reps, callback) {
  
  output.textContent = `Exercise: ${type}, Reps: ${reps}`;

  
  callback();
}


