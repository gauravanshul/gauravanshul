import {
    createStore
} from 'redux';
//Customer Reducer
const customerReducer = (customers = [], action)=>{
    switch (action.type) {
        case "ADD_CUSTOMER":
            return [...customers, action.newCustomer];    
    }
}
//store
const store = createStore(customerReducer);

//subscribe
store.subscribe(() => {
    const customers = store.getState();
    console.log(customers);
});
//Action with payload(input)
const CUSTOMER_ADD_ACTION = {
    type: 'ADD_CUSTOMER',
    newCustomer: {
        id: 1,
        name: 'Subramanian'
    }
};
//dispatch
store.dispatch(CUSTOMER_ADD_ACTION);
