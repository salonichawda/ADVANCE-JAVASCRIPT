function restP(a,b,...c) {
    console.log(a);
    console.log(b);
    console.log(...c);
    let count=0
    for(let i of c){
        count+=i
    }
    console.log(count);
}
restP(2,4,5,3,6,7,8,9,5,1,3)