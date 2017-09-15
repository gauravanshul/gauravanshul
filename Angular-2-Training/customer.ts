/**
 * Types:
 *1.primitive - number,string,boolea
  2.complex type -  Object type - literal,constructor,Array
   How to declare class? and how class Type can help you prevent this

   Interface:
     It is also type like class.
    Interface concept is dervied from java world.
 In Java data type can be declared for Complex type in the following
 way

  class  Customer{

  }
  Customer cust=new Customer();
  here cust is variale Left of cust "Customer" is data type
 Program to super Type
  class Person{}
  class Customer extends Person{

  }
  Customer cust=new Customer();
  Person cust =new Customer();

  interface MyInterface{
     void deposit();
  }
  class Customer implements MyInterface{

  }
  Customer cust=new Customer();
  MyInterface cust=new Customer();
  Typescript and Interfaces:
  In type script,interfaces play role of data type verfier and
 also restrict method overrideing.
  
 optional types:
  Some times i dont want to make all the property available in
  verifcation. I want to skip / make it optional
   invoiceAmout?:number- optional Parameter.
    */
interface CustomerType{
    id: number;
    name: string;
    invoiceAmount: number;
}
class Customer implements CustomerType{
   //instance variables and methods
    id: number;
    name: string;
    invoiceAmount: number;
    address: string;
    
}
function createCustomer() {
    let customer:CustomerType = new Customer();
    customer.id = 10;
    customer.name = 'Subramanian';
    customer.invoiceAmount = 9000;
    //customer.address = 'chennai';

    console.log(`Customer Id : ${customer.id}`);
    console.log(`Customer Name ${customer.name}`);
    console.log(`Invoice Value ${customer.invoiceAmount}`);

}
//http://paste.ubuntu.com/25512927/
createCustomer();