
const myArr = []

//console.log(typeof myObj)
//console.log(typeof myArr)
//console.log(myArr === myObj)
const myNumber = 9
const myObj= {
    name: 'Rio',
    age: 59,
    hobbies: ['coding', 'running', 'workout'],
    mobile: {
        make:'pixel7',
        OS: 'andriod',

    },
    myGreeting: function(person){
        return `What is Up ${person}`
    }
}
const greeting = myObj.myGreeting('me')
console.log(greeting)
