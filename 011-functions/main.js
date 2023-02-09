//funcations are fun

function square (x) {
return x * x     
}


function isEven(n){
    return n % 2 === 0
}

function isOdd(n){
    return n % 2 !== 0
}

function isOddOrEven(n){
    if (n % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

doMoreMath = (a,b) => a * b 
divide = (a,b) => a / b


////////////////////square return/////////////
//let result = square (7)
const result = square(6)
console.log(`this is da square ${result}`)

/////////even return////////////////
//let even = isEven(9)
const even = isEven(8)
console.log(`this is even number ${even}`)
///////////odd return/////////
//let odd = isOdd(9)   
const odd = isOdd(8)
console.log(`this is not odd number ${odd}`)    
/////////oddoreven/////////
//let result1 = isOddOrEven(7)
const result1 = isOddOrEven(7)
console.log(`the number is ${result1}`)
///////moreMath//////////
console.log(doMoreMath(20,30))
//////////divid///////
console.log(divide(400,8))


