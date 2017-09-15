import React,{Component} from 'react';
 import { render } from 'react-dom';
/**
 * Functional Component and properties
 * Functional components take properties(props) as constructor
 * parameter.
 * 
 */
const Greeter = props => {
    //simplifying using es6 object destrucing
    const { name } = props;
    return (
        
        <div>
            <h1>Hello{name}</h1>
        </div>
    )
 }
render(<Greeter name="Subramanian" />, root);