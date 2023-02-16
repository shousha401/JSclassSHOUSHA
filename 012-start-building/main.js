// update the dom
const myArr = []

const updateDom = (input) => {
    const divEl = document.querySelector(`#output`)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
    
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round (miles / gallons * price)
    const tripCoast = gallons * price
    updateDom(`Milage per gallon ${MPG} cost ${tripCoast}`)
    myArr.push(MPG,tripCoast)
  };
  
  trackMPGCost(300, 10, 5.4)
  trackMPGCost(300, 10, 5)
  updateDom(myArr)
