/**
 * Functions
 *http://paste.ubuntu.com/25513044/
 */
function add(a: number, b: number): number{
    return a + b;
}
console.log(add(10, 10));
//console.log(add());//error
//console.log(add("10",10))//error data type error

//void - undefined
function sayHello():void {
    console.log('sayHello');
}
sayHello();

function sayGreet(): any{
    return "Test";
}
console.log(sayGreet());
interface Customer{
    id: number;
    name: string;
}
function printCustomer(customer: Customer) {
    console.log(customer);
}
printCustomer({ id: 1, name: 'Subramanian' });

let myFun = (a:number):number => {
    return a + 10;
}
console.log(myFun(100));

//Polymorphic behavior in typescript:overriding
/**
 * 
 */
interface CalcuatorInterface{
    //methods
    add(a: number, b: number): number;
    substract(a: number, b: number):number;
}
//methods
class Calculator implements CalcuatorInterface{
    //methods
    add(a:number,b:number): number{
        return a + b;
    }
    //overriding
    substract(a: number, b: number): number{
        return a + b;
    }
}
function createCalculator() {
    let calc = new Calculator();
    console.log(calc.add(100, 100));
    console.log(calc.substract(23, 90));
}
createCalculator();