var num1=10;
function number() {
    var num2=10;
    function number2() {
        console.log(num1+num2);
    }
    return number2()
}
number()