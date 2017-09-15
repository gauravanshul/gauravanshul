/**
 * Component Creations pattern
 * 1.variable pattern
 * 2.function pattern
 * 3.class pattern
 */
import React from 'react';
import ReactDOM from 'react-dom';

//variable pattern:
//single element
//const hello = <h1>Hello React</h1>;
//multi line + JSX Rules with root element.
const hello = (<div>
                <h1>React Developer's Blog</h1>
                <h2>Today's Topic</h2>
              </div>)
              
//function pattern - ES 5 Function and Arrow
//ES 5 function - Greeter Component - Object
function Greeter() {
    return (
              <div>
                <h1>React Developer's Blog</h1>
                <h2>Today's Topic</h2>
              </div>)   
}
//ES 6 Arrow function -Welcome Component -Object
const Welcome=()=>(
              <div>
                <h1>React Developer's Blog</h1>
                <h2>Today's Topic</h2>
    </div>)

//ES 6 Class
class ReactDeveloper extends React.Component{
     constructor() {
         super();
       this.state={id:0}
 
    }
       
    //override method
     render() {
         let element = (
             <div>
                 <h1>React Developer's Blog</h1>
                 <h2>Today's Topic</h2>
             </div>);
         return element;
     }
     
}

//variable pattern -render
//ReactDOM.render(hello, document.getElementById('root'));
//function pattern(ES 5)- render
//ReactDOM.render(<Greeter/>, document.getElementById('root'));
//function pattern(ES 6)-render
//ReactDOM.render(<Welcome/>, document.getElementById('root'));

//es 6 class Pattern
ReactDOM.render(<ReactDeveloper/>,document.getElementById('root'))
//http://paste.ubuntu.com/25449700/