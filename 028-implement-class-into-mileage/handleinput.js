const ERR = document.getElementById('err');
const AVG_OUTPUT = document.getElementById('output-avg');

/* updateDOM function takes in input (string value) and id (to determine DOM location to update) 
and creates and updates DOM elements*/

function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement('p');
    p.textContent = input;
    divEl.appendChild(p);
}

/* trackMPGandCost function takes in miles, gallons and price and calculates MPG and tripCost and 
returns an object */

class MPGTracker {
    constructor(miles, gallons, price) {
        this.miles = miles;
        this.gallons = gallons;
        this.price = price;
    }

    trackMPGandCost() {
        const MPG = Number((this.miles / this.gallons).toFixed(2));
        const tripCost = Number((this.gallons * this.price).toFixed(2));
        
        return {
            miles: this.miles,
            gallons: this.gallons,
            price: this.price,
            MPG: MPG,
            tripCost: tripCost,
        };
    }
}


const tracker = new MPGTracker(300, 10, 2.5);
const result = tracker.trackMPGandCost();

console.log(result);


class AverageCalculator {
    constructor(data) {
        this.data = data;
    }

    calculateAvg() {
        const numberOfObj = this.data.length;
        const sums = this.data.reduce(function(sum, obj) {
            return {
                MPG: sum.MPG + obj.MPG,
                tripCost: sum.tripCost + obj.tripCost
            };
        });

        const avgMPG = Number((sums.MPG / numberOfObj).toFixed(2));
        const avgTripCost = Number((sums.tripCost / numberOfObj).toFixed(2));

        return {
            avgMPG: avgMPG,
            avgTripCost: avgTripCost
        };
    }
}


const MY_DATA = [
    { MPG: 20, tripCost: 50 },
    { MPG: 25, tripCost: 60 },
    { MPG: 30, tripCost: 70 }
];

const calculator = new AverageCalculator(MY_DATA);
const result = calculator.calculateAvg();

console.log(result);

/* isFormValid takes in miles, gallons and price and does simple validation and 
returns boolean or truthy value back to eventlisteners */

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

export {isFormValid, calculateAvg, trackMPGandCost}