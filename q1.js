// const n=require("readline-sync")
// let num=n.questionInt("enter:")

// function func1() {
//     return new Promise((resolve,reject)=>{
//         if (num%2===0){
//             resolve("even")
//         }
//         else{
//             reject("odd")
//         }
//         return new Promise((resolve,reject)=>{
//             if (num>0){
//                 resolve(true)
//             }
//             else{
//                 reject(false)
//             }
//         })
//     })
// }
// func1().then((resolv)=>{
//     console.log(resolv);
// }).catch((rej)=>{
//     console.log(rej);
// })


// let d={a:1,b:2}
// let n={b:2,a:1}


// for(i in d){
//     for(j in n){
//         if(i==j && d[i]==n[j]){
//             console.log("same");
//         }
//         else{
//             console.log("not");
//         }
//     }
// }

// x=[1,2,5,4]
// // x.sort()
// console.log(x);

// function birthday(s, d, m) {
//     // Write your code here
//     let count=0
//     for (var i = 0; i < s.length; i++){
//         sum = s.slice(i, m + i).reduce((prev, curr) => prev + curr);
//         if (sum === d){
//             count++;
//         }
//     }
//     return count
// }
// console.log(birthday([1, 2, 1, 3, 2],3,2));

// function migratoryBirds(arr) {
//     // Write your code here
//     let l={}
//     let l1=[]
//     for(let i in arr){
//         if(!l1.includes(arr[i])){
//             l1.push(arr[i])
//         }
//     }
//     // let count=0
//     for(let j in l1){
//         let count=0
//         for(let k in arr){
//             if(l1[j]===arr[k]){
//                 count++
//             }
//         }
//         l[l1[j]]=count
//     }
//     for(let a in l){
        
//     }
//     console.log(l);

// }
// migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])

// function getMoneySpent(keyboards, drives, b) {
//     let max=0
//     for(let i in keyboards){
//        for(let j in drives){
//            if(keyboards[i]+drives[j]>max && b>keyboards[i]+drives[j]){
//                max=keyboards[i]+drives[j]
//            }
//        }
//     }
//     if(max<=b){
//         return max
//     }
//     else{
//         return -1
//     }
// }
// console.log(getMoneySpent([3, 1],[5, 2, 8],10))

let string="1my#$ name is/*&4 Divya@/"
let s="1234567890@#$%&?/ *!~_-=+|"
let s1=""
let count=0
for(let i in string){
    if(string.length-1==i){
        s1+=string[i]
    }
    if(s.includes(string[i]) && count!=0){
        s1+=" "
        count=0
    }
    else{
        s1+=string[i]
        count+=1
    }
}
console.log(s1);