// **
//  *Decorators:
//   Decorators in java called Annotation.
//   Decorators:
//     Provide program level configuration code.
//     Decorators elemintate must boiler plate code
//     Declorators separate main logic and boiler plate code
//   Decorators in Javascript(ES7) and typescript:
//   ..............................................
//   1.Decorators are still experimental feature.
//   which must be enabled in tsconfig.json.
//   2.Decorators are just plain javascript function starts with
//     @symbol.
//   Types of Decorators:
//   1.class level decorators
//      Decorators are used on top of the class ,in order to provide
//   meta/boiler plate code for class.
//  2.variable level decorators
//      Decorators are used on top of the variable,in order to provide
//      meta/boiler plate code for variable.
//  3.method level decorators
//      Decorators are used on top of the method,in order to provide
//      meta/boiler plate code for methods.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//  How to write decorator? -Class decorator
//  @sealed()
//  class Customer{
//  }
//decorator defintion
//function sealed(target){
//decorator logic.
//}
/*target: on which you define decorator
if target is constructor, then it is class level decorator.
 */
function sealed(constructor) {
    //decorator logic.
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter = __decorate([
        sealed
    ], Greeter);
    return Greeter;
}());
function createGreeter() {
    var greeter = new Greeter('Gaurav');
    //greeter.newvar = 'test';
    console.log(greeter.greet());
}
createGreeter();
