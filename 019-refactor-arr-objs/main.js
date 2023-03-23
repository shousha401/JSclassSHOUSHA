const updateDOM = (input, id) => {
  const divEl = document.getElementById(id)
  const p = document.createElement("p")
  p.textContent = input
  divEl.appendChild(p)
};

const myArrObjs = [
        { 
            name:'eslam', 
            hairColor:'black',
         },
         { 
            name: 'rio', 
            hairColor: 'red',
         },
         { 
            name: 'moe', 
            hairColor: 'blue',
         }
         
        ]

       for ( let i=0; i <myArrObjs.length; i++){
        const obj = myArrObjs[i]
        const str = `${obj.name} has ${obj.hairColor} hair color. `
        updateDOM(str,"output")
       }