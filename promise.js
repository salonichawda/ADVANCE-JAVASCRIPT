const obj={name:"saloni",
            age:21}

let promise=new Promise((resolve,reject)=>{
    if (obj.hasOwnProperty("name")){
        resolve("exist")
    }
    else{
        reject("not exist")
    }
})
promise.then((resolv)=>{
    console.log(resolv);
}).catch((rej)=>{
    console.log(rej);
})