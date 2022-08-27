let obj1={
    name:"saloni",
    age:21,
    description:"student"
}

let obj2={
    name:"Ranu",
    age:24,
    description:"employee"
}

let obj3={
    name:"Shanu",
    age:26,
    description:"house wife"
}

let obj4={
    name:"Neetu",
    age:28,
    description:"house wife"
}

function information(hobby) {
    console.log(`My name is ${this.name},\nMy age is ${this.age},\nI am a ${this.description},\nI like ${hobby}.\n`);
}

let INFO1=information.bind(obj1)
INFO1("dancing")

let INFO2=information.bind(obj2)
INFO2("reading")

let INFO3=information.bind(obj3)
INFO3("cooking")

let INFO4=information.bind(obj4)
INFO4("eating")