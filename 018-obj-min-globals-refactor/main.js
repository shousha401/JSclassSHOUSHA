const form = {
  element: document.getElementById('form-input'),
  errMsg: document.getElementById('err'),
  data: {
    mpg:[],
    tripCoat: []
  },
  updateDom: function (input){
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
  },

  trackMPGandCost: function (miles, gallons, price = 3.79) {
    const mpg = Math.round(miles / gallons * price)
    const tripCost = Math.round(gallons * price)
    this.updateDom(`Mileage per gallon: ${mpg}, cost: ${tripCost}`)
    this.data.mpg.push(mpg)
    this.data.tripCost.push(tripCost)
  },
   calculateSUM: (arr) => {
    let sum = 0
    for(value of arr) {
        sum += value
    }
    return sum
  },

   calculateAvg : function (){
    const sumMPG= calculateSUM(MY_MPG)
    const sumTripCoast=calculateSUM(MY_TRIP_COST)
    const avgMPG=sumMPG/MY_MPG.length
    const avgTripCost=sumTripCoast/MY_TRIP_COST.length
    this.updateDom (`avergae MPG is ${avgMPG}`)
    this.updateDom (`avergae TRIP is ${avgTripCost}`)
  }


  
}


