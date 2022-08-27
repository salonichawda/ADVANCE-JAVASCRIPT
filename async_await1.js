let promise=new Promise((resolve, reject) => {
    async function my_func() {
        let result=await("fullfiled")
        resolve(result)
    }
    console.log("Hello!");
    my_func()
})
promise.then((resolv)=>{
    console.log(resolv);
})