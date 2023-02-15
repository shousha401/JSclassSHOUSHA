// update the dom

const updateDom = (input) => {
    const divEl = document.querySelector(`#output`)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
    
}

const milage = (miles, gallons, price = 3.79, currency = '$', precision = 2) => {
    const cost = (miles / gallons * price).toFixed(precision)
    return `${currency}${cost}`
  };
  
  updateDom(milage(300, 10, 5.4))
  
