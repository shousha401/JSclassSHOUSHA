class Person {
    constructor(fristName, lastName, address){
        this.fristName = fristName;
        this.lastName = lastName;
        this.address = address



    }
    showStatus(){
        console.log (`${this.fristName} lives at ${this.address} is taking ${this.classList}`)
    }

    

}

class Student extends Person {
    constructor(fristName, lastName, address, classList){
    super (fristName, lastName, address)
    this.classList = classList
    }
        
}


const eslam = new Student("eslam", "shousha","12 home", ["eng1a", "cirj12"])
eslam.showStatus()
const moe = new Person("moe", "shousha","15 home")
moe.showStatus()
