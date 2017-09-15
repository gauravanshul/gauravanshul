/**
 * Functions
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
interface Gaurav{
    id: number;
    name: string;
}
function printCustomer(customer: Gaurav) {
    console.log(customer);
}
printCustomer({ id: 1, name: 'Gaurav' });
let MyFunc = (a:number) => {
    return a + 10;
}
console.log(MyFunc(100));