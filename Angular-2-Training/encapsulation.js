var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(address) {
        this.id = 1;
        this.name = 'Gaurav';
        console.log("construvtor is called " + address);
    }
    return Person;
}());
function createCustomer() {
    var customer = new Person('Lucknow');
    console.log("customer id: " + customer.id);
    //console.log(Person.name);
}
createCustomer();
var PersonOne = /** @class */ (function () {
    function PersonOne(name) {
        this.name = name;
    }
    return PersonOne;
}());
var Gaurav = /** @class */ (function (_super) {
    __extends(Gaurav, _super);
    function Gaurav(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Gaurav.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Gaurav;
}(PersonOne));
var howard = new Gaurav("Ram", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); // error 
