var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
function createCustomer() {
    var customer = new Customer();
    customer.id = 10;
    customer.name = 'Subramanian';
    customer.invoiceAmount = 9000;
    //customer.address = 'chennai';
    console.log("Customer Id : " + customer.id);
    console.log("Customer Name " + customer.name);
    console.log("Invoice Value " + customer.invoiceAmount);
}
//http://paste.ubuntu.com/25512927/
createCustomer();
