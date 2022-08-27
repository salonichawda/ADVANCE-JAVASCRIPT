const obj={
    name:"saloni",
    age:21,
    hobby:"dancing"
}

let name,age,hobby

({name,age,hobby}=obj)
console.log(`I am ${name},\nI am ${age} years old,\nI like ${hobby}.`);
// console.log(obj);