const formEl = document.getElementById('form')
const output = document.getElementById('output')

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.type.value)
    const time = parseFloat(e.target.type.value)
    formEl.reset()
})