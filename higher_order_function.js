let info=(name)=>{
    if (name==="Saloni"){
        return function func(age) {
            console.log(`Hiii ${name}.\nYou are ${age} years old.\n`);
        }
    }
    if (name==="Dimple"){
        return function func(age) {
            console.log(`Hiii ${name}.\nYou are ${age} years old.\n`);
        }
    }
    if (name==="Ankita"){
        return function func(age) {
            console.log(`Hiii ${name}.\nYou are ${age} years old.\n`);
        }
    }
    if (name==="Anjali"){
        return function func(age) {
            console.log(`Hiii ${name}.\nYou are ${age} years old.\n`);
        }
    }
    else{
        console.log(`We don't have your info.`);
    }
}

info("Saloni")(21)
info("Dimple")(21)
info("Ankita")(21)
info("Anjali")(20)
// let con1=info("Saloni")
// con1(21)
// con1(23)
// con1(24)