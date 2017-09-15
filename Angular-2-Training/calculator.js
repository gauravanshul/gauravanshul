/**
 * Functions
 *http://paste.ubuntu.com/25513044/
 */
function add(a, b) {
    return a + b;
}
console.log(add(10, 10));
//console.log(add());//error
//console.log(add("10",10))//error data type error
//void - undefined
function sayHello() {
    console.log('sayHello');
}
sayHello();
function sayGreet() {
    return "Test";
}
console.log(sayGreet());
function printCustomer(customer) {
    console.log(customer);
}
printCustomer({ id: 1, name: 'Subramanian' });
var myFun = function (a) {
    return a + 10;
};
console.log(myFun(100));
//methods
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    //methods
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    //overriding
    Calculator.prototype.substract = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
function createCalculator() {
    var calc = new Calculator();
    console.log(calc.add(100, 100));
    console.log(calc.substract(23, 90));
}
createCalculator();
