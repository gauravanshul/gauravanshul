/**
 * Component Interaction /Communication:
 *  Data exchange among components
 * Parent -child -via props - data as prop
 * Child to Parent-via props -function as prop
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

 //parent to child and child to parent
class Parent extends Component { 
    state = { message: 'hi' }
    onUpdate = this.onUpdate.bind(this);
    onUpdate(event) {
        this.setState({ message: event.target.value });
    }
    render() {
        return (<div>
            <h1>Parent</h1>
             {this.state.message}
            <Child name="Subramanian"  onUpdate={this.onUpdate} />   
            <hr/>
        </div>)
    }
}
const Child = (props) => (<div>
    <div>
         <h1>Child</h1>    
        <h1>{props.name}</h1>
        <input type="text" onChange={props.onUpdate}/>
    </div>
</div>)
render(<Parent/>,root)
