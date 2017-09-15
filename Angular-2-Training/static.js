/**
 * static variables and methods
 * static variables and methods:
 * can be called without creating objects
 * can be called directly by class name
 */
var Welcome = /** @class */ (function () {
    function Welcome() {
        this.mylocation = 'chennai';
    }
    //static methods
    Welcome.sayHello = function () {
        return "Hello";
    };
    Welcome.prototype.sayHai = function () {
        return Welcome.myname = "ddd" + this.mylocation;
    };
    //static variable
    Welcome.myname = 'Gaurav';
    return Welcome;
}());
console.log(Welcome.sayHello());
Welcome.myname = "test";
console.log(Welcome.myname);
console.log(new Welcome().sayHai());
