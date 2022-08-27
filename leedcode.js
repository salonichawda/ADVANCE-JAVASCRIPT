var addTwoNumbers = function(l1, l2) {
    let l=[]
    let s1=""
    let s2=""
    for(let i in l1){
        s1+=l1[i]
    }
    for(let j in l2){
        s2+=l2[j]
    }
    let r=String(Number(s2)+Number(s1))
    for(let i=r.length-1;i>=0;i--){
        l.push(Number(r[i]))
    }
    console.log(l);
};
addTwoNumbers([2,4,3],[5,6,4])