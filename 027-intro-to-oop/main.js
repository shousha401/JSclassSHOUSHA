class Person {
    constructor(firstName, lastName, address){
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
    }

    getFirstName() {
        return `${this._firstName}`
    }

    setFirstName(newFirstName) {
        this._firstName = newFirstName
    }

    getLastName() {
        return `${this._lastName}`
    }

    setLastName(newLastName) {
        this._lastName = newLastName
    }

    getAddress() {
        return `${this._address}`
    }
    setAddress(newAddress) {
        this.__address = newAddress
    }


    
    showStatus() {
        console.log(`${this.getFirstName()} lives at ${this.getAddress()}`)
    }
}

class Student extends Person {
    constructor(firstName, lastName, address, classList) {
        super(firstName, lastName, address)
        this._classList = classList
    }


    getClassList() {
        return `${this._classList}`
    }

    setClassList(newClassList) {
        this.__classlist = newClassList
    }

    showStatus() {
        console.log(`${this.getFirstName()} lives at ${this.getAddress()} is taking ${this.getClassList()}`)
    }
}

const eslam = new Student("eslam", "shousha", "5151 pluto ave", ["Math51", "Art89"])
eslam.showStatus()
const moe = new Person("moe", "shoush", "inside the pyramids")
moe.showStatus()
console.log(eslam.getFirstName())
console.log(moe.getAddress())
console.log(eslam.getLastName())