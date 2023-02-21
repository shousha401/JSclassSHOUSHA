// update the dom
const myMPG = []
const myTripCost = []

const updateDom = (input) => {
    const divEl = document.querySelector(`#output`)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
    
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round (miles / gallons * price)
    const tripCoast = Math.round (gallons * price)
    updateDom(`Milage per gallon ${MPG} cost ${tripCoast}`)
    myMPG.push(MPG)
    myTripCost.push(tripCoast)
  }

  const calculateMPGAvg = () => {
   let totalMPG = 0
    for (let i = 0; i < myMPG.length; i++){
       totalMPG = totalMPG + myMPG[i]
    }
    let avgMPG = Math.round(totalMPG/myMPG.length)
    updateDom(`avg mps is ${avgMPG}`)
  }
  //////////////////////////////////////////////////////////

  const calculateAvgCoast = () => {
    let totalCoast = 0
    for (let i=0; i < myTripCost.length;i++){
        totalCoast = totalCoast + myTripCost[i]
    }
    let avgCoast = Math.round(totalCoast/myTripCost.length)
    updateDom(`avvg cost is ${avgCoast}`)
       
  }


  // calculateAvgCoast
  // git flow my code for avreagecoast
  trackMPGandCost(300, 10, 5.4)
  trackMPGandCost(400, 6, 5)
  trackMPGandCost(200, 5, 4)
  trackMPGandCost(150, 9, 4)
  trackMPGandCost(270, 4, 3)
  trackMPGandCost(180, 4, 6)
  trackMPGandCost(432, 6, 4)
  trackMPGandCost(210, 4, 2)
  trackMPGandCost(121, 3, 5)
  trackMPGandCost(390, 11, 9)
  
  calculateMPGAvg()
  calculateAvgCoast()
