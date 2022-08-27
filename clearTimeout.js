// program to stop the setTimeout() method

let count = 0;

// function creation
function increaseCount(){

    // increasing the count by 1
    count += 1;
    if (count===5){
        // clearTimeout
        clearTimeout(id);
    }
    console.log(count)

}
let id = setInterval(increaseCount, 3000);
// clearTimeout
// clearTimeout(id); 
console.log('setTimeout is stopped.');