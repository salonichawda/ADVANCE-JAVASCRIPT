const obj={
    name:"saloni",
    age:21,
    sum:function() {
        let s=2+2
        console.log(s);
        console.log(this)
    }
}
obj.sum();