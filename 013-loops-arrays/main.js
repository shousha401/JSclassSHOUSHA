// update the dom
const MY_MPG=[]
const MY_TRIP_COST= []


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
   MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCoast)
  }

  const calculateMPGAvg = () => {
   let totalMPG = 0
    for (let i = 0; i < MY_MPG.length; i++){
       totalMPG = totalMPG + MY_MPG[i]
    }
    let avgMPG = Math.round(totalMPG/MY_MPG.length)
    updateDom(`avg mps is ${avgMPG}`)
  }
  //////////////////////////////////////////////////////////

 // const calculateAvgCoast = () => {
   // let totalCoast = 0
  //  for (let i=0; i < MY_TRIP_COST.length;i++){
  //      totalCoast = totalCoast + MY_TRIP_COST[i]
  //  }
  //  let avgCoast = Math.round(totalCoast/MY_TRIP_COST.length)
  //  updateDom(`avvg cost is ${avgCoast}`)
       
  //}

  const calculateSUM = (arr) => {
    let sum=0
    for(let i=0; i < arr.length;i++){
    sum = sum + arr[i]
    }
    return sum
  }







  const calculateAvg = ()=>{
    let sumMPG= calculateSUM(MY_MPG)
    let sumTripCoast=calculateSUM(MY_TRIP_COST)
    let avgMPG=sumMPG/MY_MPG.length
    let avgTripCost=sumTripCoast/MY_TRIP_COST.length
    updateDom (`avergae MPG is ${avgMPG}`)
    updateDom (`avergae TRIP is ${avgTripCost}`)
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
  calculateAvg()
