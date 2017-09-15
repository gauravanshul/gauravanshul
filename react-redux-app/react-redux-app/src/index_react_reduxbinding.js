/**
 * React + Redux Binding
 * React -View
 * Redux -Model
 * V <------Bridge(Binding)------>M
 * Binding is called react-redux binding lib
 * react-redux is a separate official binding lib
 * steps:
 * 1.install
 *   npm install react-redux --save
 * 2.import basic libs
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect,Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

/////////////////////////////////////////////////////////////////
///Redux - State Layer
const couterReducer = (counter = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return counter + 1;
        case 'DECREMENT':
            return counter - 1;
        default:
            return counter;
    }
}
const appStore = createStore(couterReducer);
//////////////////////////////////////////////////////////////////
// Action
const INCREMENT_ACTION = { type: 'INCREMENT' }

/**React Principle
 * 1.The data should be passed as prop-Statelesss Application.
 * 2.Data(state) now is availbale in redux.How to access redux
 *   state inside react as a prop.
 *   react-redux lib defines configuration:
 *    Mapping redux state with React as prop
 *    State of redux becomes prop of React
 */
//configuration:State mapping 
// Map Redux state to component props
function mapStateToProps(counter) {
    return {
   //value(React's prop):counter(redux's state)   
    value: counter
  }
}
//configuration:Action Mapping
//Map Redux action to Component prop(function)
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(INCREMENT_ACTION)
  }
}

////////////////////////////////////////////////////////////////
//React -View
// React component
class Counter extends Component {
    render() {
        const { value, onIncrement } = this.props;
    return (
        <div className="container">
         <h1>React-Redux App</h1>      
         <p className="badge badge-secondary">
                {value}
         </p>
         <br />
         <button onClick={onIncrement}>Increment</button>
      </div>
    )
  }
}

//Connect Redux with React
// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

//How to pass store Object to React Application

render(<Provider store={appStore}>
        <App/>
    </Provider>, root);

 /**
  *                        store
                             |as prop 
                         ----------(App)
                         |
                        children
  */ 














