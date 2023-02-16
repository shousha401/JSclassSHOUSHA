// update the dom
const myArr = []

const updateDom = (input) => {
    const divEl = document.querySelector(`#output`)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
    
}

const trackMPGCost = (miles, gallons, price = 3.79, currency = '$', precision = 2) => {
    const MPG = (miles / gallons * price).toFixed(precision)
    const tripCoast = gallons * price
    myArr.push(MPG,tripCoast)
  };
  
  updateDom(trackMPGCost(300, 10, 5.4))
  updateDom(trackMPGCost(300, 10, 5))
  
