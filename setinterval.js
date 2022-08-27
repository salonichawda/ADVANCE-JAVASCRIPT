// program to display time every 3 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
    // id=setTimeout(showTime, 3000);
}
id=setInterval(showTime, 3000);
clearTimeout(id)
// calling the function
showTime();