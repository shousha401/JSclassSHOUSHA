
let pizza
function orderPizza() {
    console.log ('Order pizza')
    setTimeout (()=> {
        pizza = '🍕'
    }, 2000)
   
    console.log ('Pizza was ordered')
    
}
orderPizza()
console.log (`Eat ${pizza}`)
