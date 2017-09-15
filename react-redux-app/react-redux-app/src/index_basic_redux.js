/**
 * Redux:State layer
 * core Princles:
 * 1.single source of Truth
 *  The whole Application state(data) can be stored in one place
 *  How Application state is managed?
 *   In a single Object- called state tree.
 *  {
 *    counter:1,
 *    comments:[],
 *    login:{
 *      id:1,
 *      name:'name'
 *   }
 * }
 * 2.state is Ready Only
 *   The only way to change the state is to emit an action, an object describing what happened.

   3.Changes are made with pure functions
     Data manipulation should be done via pur functions this called
     Reducer.
    Reducer is a pure function.
    pure function is function which returns immutable data structure.
    impurt function is funciton which returns mutable data structure.
    
    To start with redux - you have to install redux lib
    npm install redux --save
React
View <--->store----->dispatcher---->action----Reducer---
          |                                             |
          ---------------------------------------------
          store.dispatch(action)====>reducer ---returns data==>store


   Program Steps:
   1.import redux
        createStore - function should be imported - to create Store
   createStore(reducer):Store
      Takes redurcer as a parameter,returns Store Object

 */
import {
    createStore
} from 'redux';

//Reducer 
/**
 * 1.Reducer is just function.
 * 2.Reducer takes Arguments
 *    2.1.inital state - just like React state initalization.
 *        inital state is just variable,can hold any data-primitives,objects,array
 *        counter=0 / name='',status=true comments=[],user={id:1,name:''}
 *   2.2.action-Which describes what /how to change state.
 *   action:just literal object which describes what to do
 *       {}
 *   action object contains two property,one is required another one
 *   optional property
 *    {
 *     type:'INCREMENT',
 *     payload:'input' - input can be any data type
 *   }
 *  const customerReducer = (customers = [], action)=> {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return customers.push(action.payload)
        case 'UPDATE_CUSTOMER':
            
        default:
            return customers
    }
}

}
customerReducer - addCustomer, updateCustomer, deleteCustomer, searchCustomer,
    'ADD_CUSTOMER', 'UPDATE_CUSTOMER', 'DELETE_CUSTOMER'

    //Store API:
    1.getState()
        Get State(Data) from the store which reducer already returned.
        Get State generally returns object or primitive based on data
    2.dispatch(action)
      store.dispatch({type:'INCREMENT'})
       dispatch method starts the communication flow.
       dispatch------reducer---returns state--->store---->getState
    3.subscribe(listener)
      it is event api.
      Listens for data,when ever the reducer returns data to store
      subscribe call a method,in which you can read read
     store.subscribe(()=>{
        const state= store.getState();
     })


 */

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
//create Store Object
const appStore = createStore(couterReducer);
//subscribe
appStore.subscribe(() => {
    //Get State From the Store
    const state = appStore.getState();
    console.log(`Counter(state) ${state}`);
})


//Describe Action - Increment
const INCREMENT_ACTION = {
    type: 'INCREMENT'
};
//dispatch action
appStore.dispatch(INCREMENT_ACTION);
appStore.dispatch(INCREMENT_ACTION);
appStore.dispatch(INCREMENT_ACTION);

//Describe Action - Decrement
const DECREMENT_ACTION = {
    type: 'DECREMENT'
};
appStore.dispatch(DECREMENT_ACTION);

