/**
 * Functions
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
printCustomer({ id: 1, name: 'Gaurav' });
var MyFunc = function (a) {
    return a + 10;
};
console.log(MyFunc(100));
