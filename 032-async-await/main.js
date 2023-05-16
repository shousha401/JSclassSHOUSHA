function getData(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
           // resolve('here is ur data')
           reject('Something went wrong!')
        }, 1)
    })
}

function onSuccess() {
}

function onFailure() {
}



async function start() {
    try {
        const result = await getData()
        //console.log(`Success: ${result}`)
       // onSuccess()
    } catch (error) {
        //console.log(`Error: ${error}`)
        //onFailure()
    }
}

//async function start2() {
  // const result = await getData()
   
  // .catch(error => {
  // console.log(`Error: ${error}`)
  // })
 // console.log(result)
   
//}
start()