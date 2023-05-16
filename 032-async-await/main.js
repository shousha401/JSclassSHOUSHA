function getData() {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(46)
        },1)
    })
}
async function start(){
    const result = await getData()
console.log(result)

}

//async function start2(){
  //  getData()
  //  .then(result => {
  //      console.log(result)
  //  })
//}

start()