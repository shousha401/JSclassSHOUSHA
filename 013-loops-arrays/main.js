// update the dom
const myMPG = []
const myTripCost = []

const updateDom = (input) => {
    const divEl = document.querySelector(`#output`)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
    
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round (miles / gallons * price)
    const tripCoast = Math.round (gallons * price)
    updateDom(`Milage per gallon ${MPG} cost ${tripCoast}`)
    myMPG.push(MPG)
    myTripCost.push(tripCoast)
  }

  const calculateMPGAvg = () => {
    //const avgMPG = (myArr[0]+ myArr[2]) / 2
   // updateDom(` Average miles per gallon is ${avgMPG} `)
   let totalMPG = 0
    for (let i = 0; i < myMPG.length; i++){
       totalMPG = totalMPG + myMPG[i]
    }
    //console.log(totalMPG)
    let avgMPG = totalMPG/myMPG.length
    //return
    updateDom(`avg mps is ${avgMPG}`)

  }


  
  trackMPGCost(300, 10, 5.4)
  trackMPGCost(400, 6, 5)
  trackMPGCost(200, 5, 4)
  trackMPGCost(150, 9, 4)
  trackMPGCost(270, 4, 3)
  trackMPGCost(180, 4, 6)
  trackMPGCost(432, 6, 4)
  trackMPGCost(210, 4, 2)
  trackMPGCost(121, 3, 5)
  trackMPGCost(390, 11, 9)
  //updateDom(myArr)
  calculateMPGAvg()
