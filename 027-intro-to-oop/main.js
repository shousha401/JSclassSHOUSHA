class Person {
    constructor(fristName, lastName, address){
        this.fristName = fristName;
        this.lastName = lastName;
        this.address = address



    }
    showStatus(){
        console.log (`${this.fristName} lives at ${this.address}`)
    }

}
const eslam = new Person("eslam", "shousha","12 home")
eslam.showStatus()
const moe = new Person("moe", "shousha","15 home")
moe.showStatus()
