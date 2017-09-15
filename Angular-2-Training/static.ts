/**
 * static variables and methods
 * static variables and methods:
 * can be called without creating objects
 * can be called directly by class name
 */
class Welcome{
    //static variable
    static myname: string = 'Gaurav';
    mylocation= 'chennai';
    //static methods
    static sayHello(): string{
        return "Hello" 
    }
    sayHai(): string{
        return Welcome.myname = "ddd" + this.mylocation;
    }
}
console.log(Welcome.sayHello());
Welcome.myname = "test";
console.log(Welcome.myname);
console.log(new Welcome().sayHai())