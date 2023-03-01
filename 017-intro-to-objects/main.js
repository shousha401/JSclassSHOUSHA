
const myArr = []

//console.log(typeof myObj)
//console.log(typeof myArr)
//console.log(myArr === myObj)
const myNumber = 9
const myObj= {
    name: 'eslam',
    age: 31 ,
    hobbies: ['coding', 'traveling', 'sleep'],
    isEgyptain: true,
    mobile: {
        make:'promax13',
        OS: 'ios',

    },
    myGreeting: function(person){
    console.log(`Hello Ms Rio This is ${this.name} and I am ${this.age}`)
    },
    
    calculateSum: function(num1,num2){
        return num1 + num2
    },
}



console.log(myObj.name)
console.log(myObj.age)
console.log(myObj.hobbies[2])
myObj.myGreeting()
console.log(myObj.calculateSum(18, 4))

