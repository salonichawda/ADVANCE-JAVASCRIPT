let obj={
    name:"saloni",
    age:21,
    description:function descript(d,h) {
        console.log(`my name is ${this.name},\nmy age is ${this.age},\nI am a ${d} of xyz,\nmy hobby is ${h}.`);
    }
}
// obj.description("student","dancing")
let obj2={
    name:"Ranu",
    age:24
}
obj.description.call(obj2,"employee","reading")