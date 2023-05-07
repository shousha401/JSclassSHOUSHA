const FORM = document.getElementById('form-input')
const ERR =document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

const MY_DATA = []


const updateDom = (input, id) => {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
    
}

const trackMPGandCost = (obj) => {
   const MPG = Math.round (obj.miles / obj.gallons)
    const tripCoast = Math.round (obj.gallons * obj.price)
    updateDom(`Miles per gallon is ${MPG} and trip cost is ${tripCoast}`,'#output')
    obj.MPG = MPG
    obj.tripCoast = tripCoast
    return obj
  }

  const calculateAvg = () => {
   let sumMPG = 0
   let sumTripCoast = 0
   MY_DATA.forEach(obj =>{
    sumMPG += obj.MPG
    sumTripCoast += obj.tripCoast

   })
   const avgMPG = Math.round(sumMPG/MY_DATA.length)
   const avgTripCost = Math.round(sumTripCoast/MY_DATA.length)
   updateDom (`averge MPG is ${avgMPG}`,'#output-avg')

   
   
  }
  



  
  FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const errMsg = []
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    if(miles === 0 || gallons === 0 || price === 0){
      errMsg.push('makse sure input more 0, try again')
    }
    if(price>1000){
      errMsg.push('really? try again')
    }
    if(errMsg.length > 0){
      ERR.textContent = errMsg
    } else {
      const newDataObj = {
        miles: miles,
        gallons: gallons,
        price: price
      }
      ERR.textContent = ''
      AVG_OUTPUT.textContent = ''
      const updatedDataObj= trackMPGandCost(newDataObj)
      MY_DATA.push(updatedDataObj)
      calculateAvg()
    }
    FORM.reset()
  
})

