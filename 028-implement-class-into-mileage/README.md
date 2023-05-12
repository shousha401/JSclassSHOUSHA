I got couple problems i dont have workin code for Higher Order Functions so I did copy it from githib bit i notice its not working as well
2- after watching the video i understand thats we will place the implement  class at the return place like the blow
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

// Example usage
const tracker = new MPGTracker(300, 10, 2.5);
const result = tracker.trackMPGandCost();

console.log(result);