/**
 * More reducers:
 * An Application can have more reudcers.but only one store.
 * 
 */
import {
    createStore,combineReducers
} from 'redux';

const counterReducer = (counter = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return counter + 1;
        case 'DECREMENT':
            return counter - 1;
        default:
            return counter;
    }
}

//Customer Reducer
const customerReducer = (customers = [], action)=>{
    switch (action.type) {
        case "ADD_CUSTOMER":
            return [...customers, action.newCustomer];    
        default:
            return customers;    
            
    }
    
}
///one reducer
const rootReducer = combineReducers({counterReducer,customerReducer});
//create store with mulitple reducer
const store = createStore(rootReducer);


//subscribe
store.subscribe(() => {
    //Get State From the Store
    const state = store.getState();
    console.log(state);
})

//Action with payload(input)
const CUSTOMER_ADD_ACTION = {
    type: 'ADD_CUSTOMER',
    newCustomer: {
        id: 1,
        name: 'Subramanian'
    }
};
//dispatch :customer
store.dispatch(CUSTOMER_ADD_ACTION);

//dispatch:counter
const counterActionCreator = () => {
    return {
        type: 'INCREMENT'
    }
}
store.dispatch(counterActionCreator());