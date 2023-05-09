
import {renderTable} from "./render.js";

const FORM = document.getElementById('form-input');
const ERR = document.getElementById('err');
const AVG_OUTPUT = document.getElementById('output-avg');


function getTripData(){
    const tripDataJSON = localStorage.getItem('tripdata')
    if(tripDataJSON !== null) {
        return JSON.parse(tripDataJSON)

    } else {
        return []
    }
    

}

function saveTripData() {
    localStorage.setItem('tripdata', JSON.stringify(MY_DATA))
}


const MY_DATA = getTripData()
renderTable(MY_DATA)



function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement('p');
    p.textContent = input;
    divEl.appendChild(p);
}



function trackMPGandCost(miles, gallons, price) {
    const MPG = Math.round(miles / gallons);
    const tripCost = Math.round(gallons * price);
    
    return {
        miles: miles,
        gallons: gallons,
        price: price,
        MPG: MPG,
        tripCost: tripCost,
    };
}



function calculateAvg() {
    const numberOfObj = MY_DATA.length;
    let sumMPG = 0;
    let sumTripCost = 0;
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG;
        sumTripCost += obj.tripCost;
    });
    const avgMPG = Math.round(sumMPG / numberOfObj);
    const avgTripCost = Math.round(sumTripCost / numberOfObj);
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg');
    updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-avg');
}


function isFormValid(miles, gallons, price) {
    const errMsg = [];
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure your input value greater than 0!!, Try Again');
    }
    if (price > 1000) {
        errMsg.push('Really!!!?? I think this is in error...Try again');
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg;
    } else {
        return true;
    }
}





FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const miles = parseInt(e.target.miles.value);
    const gallons = parseInt(e.target.gallons.value);
    const price = parseInt(e.target.price.value);
    const isValid = isFormValid(miles, gallons, price);
    if (isValid) {
        ERR.textContent = '';
        AVG_OUTPUT.textContent = '';
        const dataObj = trackMPGandCost(miles, gallons, price);
        MY_DATA.push(dataObj);
        saveTripData()
        renderTable(MY_DATA, FORM);
        calculateAvg();
    }
    FORM.reset();
});