function fun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Bad data')

        },100)

    })
       
}

function fun2(){
 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('😒')



        },100)

    })
       
}

function onSuccess(data){
    console.log(`Success: ${data}`)
}

function onError(errorCode){
    console.log(`Error: ${errorCode}`)
}

function onFinally(){
    console.log('FINALLY WE BE DONE YO')
}

fun1()
.then(fun2)
.then(onSuccess)
.catch(onError)
.finally(onFinally)