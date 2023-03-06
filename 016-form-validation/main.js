const FORM = document.getElementById('form-input')
const ERR =document.getElementById('err')

const MY_MPG=[]
const MY_TRIP_COST= []


const updateDom = (input) => {
    const divEl = document.querySelector('#output')
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
    let sum = 0
    for(value of arr) {
        sum += value
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
  
FORM.addEventListener('submit',(e)=>{
  e.preventDefault()
  const errMsg = []
  const miles = parseInt(e.target.miles.value)
  const gallons = parseInt(e.target.gallons.value)
  const price = parseInt(e.target.price.value)
  if(miles === 0) {
   errMsg.push('make sure you value is greater than 0 ')
  } 
  if(errMsg.length>0) {
 ERR.textContent = errMsg
  }else {
    trackMPGandCost(miles, gallons, price)
  }
  
} )
