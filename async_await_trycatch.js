let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Im saloni chawda");
    },2000);
})

async function my_func() {
    try{
        // console.log(a);
        let result=await(promise)
        console.log(result);
        // console.log(a);
    } catch (error) {
        console.log("Error:"+error);
    }finally{
        console.log("Your promise is complete");
    }
}
my_func()
promise.then((resolv)=>{
    console.log(resolv);
})