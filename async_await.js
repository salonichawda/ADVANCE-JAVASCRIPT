let promise=new Promise((resolve, reject) => {
    if(false){
        setTimeout((name)=>{
            console.log(name);
            resolve("Your promise is successfully fullfiled")
        },2000,"Saloni Chawda")
    }
    else{
        reject("Not fullfiled")
    }
})

async function my_func(n){
    console.log(n);
    let result=await(promise)
    console.log(result);
    console.log("Byyy");
}
my_func("Hello!")