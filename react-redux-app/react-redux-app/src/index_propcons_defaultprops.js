 import React,{Component} from 'react';
 import { render } from 'react-dom';

 //npm install prop-types --save
 import PropTypes from 'prop-types';

//default property:
//property constraint
/**
 * what if i dont pass the property to my component.defaultProps
 * what if i want to set propety rules
 */
class Greeter extends Component{
    render() {
        //es 6 object destructing syntax
        /**
         * Any literal object can be assigned to another variables
         * and accethem like normal variable
         */
         //old way -es 5
        //let name = this.props.name;
        //let age = this.props.age;
        
        const { name, age } = this.props;
         return (
             <div>
              <h1>Hello!{name}</h1>    
           </div>    
        )
    }
 }
//http://paste.ubuntu.com/25482253/
//define default properties
Greeter.defaultProps = {
    name: 'your name goes here',
    age: 25
}
//property constraint
Greeter.propTypes = {
    name:PropTypes.string
}
const name = "Ram";
const age = 25;
render(<Greeter name={name} age={age} />, root);