class Person{

    public id:number = 1;
    private name:string = 'Gaurav';
    constructor(address:string) {
        console.log(`construvtor is called ${address}`);
    }
}
function createCustomer(){
    let customer = new Person('Lucknow');
    console.log(`customer id: ${customer.id}`);
    //console.log(Person.name);
}
createCustomer();
class PersonOne{
    protected name:string;
    constructor(name: string) {
        this.name =name;
    }
}
class Gaurav extends PersonOne {
    private department: string;

    constructor(name: string, department: string) {
        super(name); 
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Gaurav("Ram", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); // error