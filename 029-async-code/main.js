function thing1 (callback) {
    callback()
}

function thing2 (callback) {
    callback()
}

function thing3 (callback){
    callback()
}

thing1(() => {
    thing2(()=>{
        thing3()
    })
})