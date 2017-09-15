var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
function createCustomer() {
    var customer = new Customer();
    customer.id = 10;
    customer.name = "Gaurav";
    customer.invoiceAmount = 10000;
}
function doStuff() {
    var name = "Gaurav";
    var number = 10;
    var salary = 100000;
    var isWorking = true;
    var age = 26;
    console.log("My name is " + name + ". My id is " + number + " and my salary is " + salary + " and I am very very " + isWorking + " person and my age is " + age);
}
doStuff();
