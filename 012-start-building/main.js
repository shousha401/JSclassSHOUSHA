// update the dom

const updateDom = (input, targetId = 'output') => {
    const divEl = document.querySelector(`#${targetId}`)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
    
}


updateDom("Hello, world", "parameter")
//updateDom("Hello, world")



