 import React from 'react';
 import ReactDOM, { render } from 'react-dom';
 import logo from './logo.svg';
 import './App.css';

class Greeter extends React.Component{
    render() {
        console.log(this.props)
         return (
             <div>
                 <img className="App-logo " src={this.props.profile.pic}/>     
                 <h1>Hello!{this.props.profile.name}</h1>    
                 <h1>You are From {this.props.profile.address}</h1>
            </div>    
        )
    }
}
//data - string,number,boolean,object(literal,array)
const myname = "Subramanian";
const myaddress = "Chennai";
//passing hardcoded literal directly
//render(<Greeter name="Subramanian" address="Chennai" />, root); 
//passing literal via variable
//render(<Greeter name={myname} address={myaddress}/>, root);
//passing literal
const profile = {
    id: 1,
    name: 'Subramanian',
    address: 'Chenai',
    pic:logo
};
render(<Greeter profile={profile} />, root);

//////////////////////////////////////////////////////
/* 
let customer = {}; //empty object-no variables

//augmentation
customer.calculateInvoice = function () { }
customer.address = {
    street:'10thstreet'
}
customer.name = 'Subramanian';

console.log(customer); */

//http://paste.ubuntu.com/25450774/