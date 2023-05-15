//function fun1(){
    //return new Promise((resolve, reject)=>{
       // setTimeout(()=>{
        //    resolve('Bad data')

       // },100)

    //})
       
//}

//function fun2(){
 
   // return new Promise((resolve, reject) => {
     //   setTimeout(() => {
       //     resolve('😒')



      //  },100)

  //  })
       
//}

//function onSuccess(data){
   // console.log(`Success: ${data}`)
//}

//function onError(errorCode){
   // console.log(`Error: ${errorCode}`)
//}

//function onFinally(){
    //console.log('FINALLY WE BE DONE YO')
//}

//fun1()
//.then(fun2)
//.then(onSuccess)
//.catch(onError)
//.finally(onFinally)

function fetchData(){

    return new Promise(function(resolve, reject){
fetch('https://api.weather.gov/gridpoints/HNX/53,100/forecast')
.then(response => response.json())
.then(data => resolve(data.properties.periods[1].temperture))
    })
}
function displayData(weather){
    console.log(weather)
}

function onError(err){
    console.log(`Error:${err}`)
}

fetchData().then(displayData).catch(onError)

