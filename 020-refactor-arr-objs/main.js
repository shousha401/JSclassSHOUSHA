const FORM = document.getElementById('form-input')
const ERR =document.getElementById('err')

const MY_TRIPS = []


const updateDom = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
    
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
   const MPG = Math.round (miles / gallons * price)
    const tripCoast = Math.round (gallons * price)
    const trip = {
      miles,
      gallons,
      price,
      MPG,
      tripCoast,
    }
    MY_TRIPS.push(trip)
    updateDom(`Mileage per gallon: ${MPG}. Cost: ${tripCoast}.`)
   
  }

  const calculateMPGAvg = () => {
   let totalMPG = 0
    for (let i = 0; i < MY_TRIPS.length; i++){
       totalMPG = totalMPG + MY_TRIPS[i].MPG
    }
    let avgMPG = Math.round(totalMPG/MY_MPG.length)
    updateDom(`avg mps is ${avgMPG}`)
  }
  

  const calculateSUM = (arr,key) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i][key]
    }
    return sum
    
  }







  const calculateAvg = ()=>{
    let sumMPG= calculateSUM(MY_TRIPS, 'MPG')
    let sumTripCoast=calculateSUM(MY_TRIPS, 'tripCost')
    let avgMPG=sumMPG/MY_TRIPS.length
    let avgTripCost=sumTripCoast/MY_TRIPS.length
    updateDom (`avergae MPG is ${avgMPG}`)
    updateDom (`avergae TRIP is ${avgTripCost}`)
  }
  
  FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const miles = Number(e.target.elements.miles.value)
    const gallons = Number(e.target.elements.gallons.value)
    const price = Number(e.target.elements.price.value)
    if (miles > 0 && gallons > 0 && price > 0) {
      trackMPGandCost(miles, gallons, price)
    } else {
      ERR.textContent = 'Please enter valid values.'
    }
    e.target.reset()
  
} )
