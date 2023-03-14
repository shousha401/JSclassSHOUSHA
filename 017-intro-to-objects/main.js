
const myArr = []

//console.log(typeof myObj)
//console.log(typeof myArr)
//console.log(myArr === myObj)

const myNumber = 9
const myObj= {
    name: 'eslam',
    age: 31 ,
    hobbies: ['coding', 'traveling', 'sleep'],
    likes: 0,
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
    increaseLikes: function(){
        this.likes += 1
    }
}

const esObj = myObj
esObj.increaseLikes()
console.log(esObj)
esObj.age=32
// I know I have to write a code here to pass something throw soemthing but i did not really understand what to do i was little confused.



console.log(myObj.name.length)
console.log(myObj.name)
console.log(myObj.age)
console.log(myObj.hobbies[2])
myObj.myGreeting()
console.log(myObj.calculateSum(18, 4))

for(key in  myObj){
console.log(`key ${key} and value ${myObj[key]} `)
}

// comment where you play around with methods.
// I try the Number.prototype.valueOf() , value, length

