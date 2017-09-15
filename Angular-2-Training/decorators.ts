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
function sealed(constructor: Function) {
    //decorator logic.
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
function createGreeter() {
    let greeter = new Greeter('Gaurav');
    //greeter.newvar = 'test';
    console.log(greeter.greet());

}
createGreeter();