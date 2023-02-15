// update the dom

const updateDom = (input) => {
    const divEl = document.querySelector(`#output`)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
    
}

const milage = (miles, gallons, price = 3.79) => miles/gallons * price


updateDom(milage(300,10,5.40))

