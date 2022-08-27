let info={
    name:"Saloni",
    age:21,
    qual:"Graduation",
    hobby:"Dancing"
}
function  callback(info){
    console.log(`My name is ${info.name}`);
    setTimeout(()=>{
        console.log(`MY age is ${info.age}`);
        setTimeout(()=>{
            console.log(`I have completed ${info.qual}`);
            setTimeout(()=>{
                console.log(`My hobby is ${info.hobby}`);
            },2000)
        },2000)
    },2000)
}
callback(info)