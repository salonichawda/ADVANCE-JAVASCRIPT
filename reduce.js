// let arr=[3,4,5,6,2,1]

// let sum=arr.reduce((a,b)=> a+b)
// console.log(sum);

function foo(x) {
    console.log(x);
 }
 function bar(func) {
    func();
 }
 //alerts "Hello World!" (from within bar AFTER being passed)
 bar(function(){ foo("Hello World!") });