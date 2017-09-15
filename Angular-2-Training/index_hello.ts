interface CustomerType {
    id: number;
    name: string;
    invoiceAmount: number;
}
class Customer implements CustomerType{
    id:number;
    name: string;
    invoiceAmount: number;
}
function createCustomer() {
    let customer:CustomerType = new Customer();
    customer.id = 10;
    customer.name ="Gaurav";
    customer.invoiceAmount = 10000;
}
function doStuff() {
    let name:string = "Gaurav";
    let number:number = 10;
    let salary:number = 100000;
    let isWorking:boolean = true;
    let age:number = 26;
    console.log(`My name is ${name}. My id is ${number} and my salary is ${salary} and I am very very ${isWorking} person and my age is ${age}`);
}
doStuff();