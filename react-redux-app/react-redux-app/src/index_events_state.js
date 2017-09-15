/**
 * state,props = both are data holder
 * Component can take data from outside =  props
 *  Stateless Component
 * Component can keep the data inside = state
 *   Statefull Component
 */
 /**
  * How to change/update state-data modification?
     Events
     Javascript -plian
     <input type="button" onclick="increment()" value="click">
     function increment(event){

     }
     React -jsx syntax
    <input type="button" onClick={increment}/>
     Steps:
     1.You need to bind the event listener with component by using syntax
       increment = this.increment.bind(this);
     2.update state and update view
       setState(state)- This is method from Component class
           should be called in order to change data and update view
         which takes object(state )as parameter
          let newCounter =this.state.counter+1;
         this.setState({counter:newCounter})

    SyntheticEvent:
     SyntheticEvent is Object inherited from Event Object of Browser(DOM)
     classs SynteticEvent extends Event{
        //

     }
    new SyntecticEvent() --->increment(evt){
        
    }
     SyntheticEvent Object Properties
     .....................................

  boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
DOMEventTarget target
number timeStamp
string type
Note: SyntenticEvent object is created by React and its reference
is avilable inside event handler
 increment(evt){

 }
 here evt is variable holds , SynthenticEvent Object  Reference
 through which you can access dom element values

  */

import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';


//undefined:the variable declared ,which is not having valid literal
let name;
console.log(name);
//null: the variable declared,which is not having valid literal
let emp = null;
console.log(emp);
//null vs undefined: null means that variable,
      //later will hold object- only for code readability


class Counter extends Component{
     //intialize the state variable for my data
    state = {
        counter: 1,
        name: 'Your Name place holder',
        login: {
            username: 'admin', pass: 'admin'
        },
        skills:[]
    };
    //Event binding-must be done for every event handler
    increment = this.increment.bind(this);
    handleName = this.handleName.bind(this);

    increment() {
        //console.log('increment is called!');
      //change the state
        this.setState({ counter: this.state.counter + 1 });  
    }
    handleName(event) {
        let txtValue = event.target.value;
        this.setState({ name: txtValue });
    }


    render() {
        console.log('render is called');
        return (
        <div className="container">
                <h1>StateFull Component</h1>   
                <div>
                    <div className="row">    
                    <div className="col-md-4">     
                       <span className="lead">
                                {this.state.counter}
                                <input type="button" value="like"
                                    onClick={this.increment} />
                        <button>DisLike</button>              
                     </span>  
                    </div>        
                    </div>    
                    <div className="row">    
                    <div className="col-md-4">     
                       <span className="lead">
                                {this.state.name}
                        <input type="text"
                                    onKeyUp={this.handleName}
                                    placeholder="your name" />      
                    </span>  
                    </div>        
                    </div>    
                    <div className="row">    
                    <div className="col-md-4">     
                       <span className="lead">
                          {this.state.login.username}
                    </span>  
                    </div>        
                    </div>    
                </div>      
        </div>)
   }
}
render(<Counter />, root);

//http://paste.ubuntu.com/25483362/