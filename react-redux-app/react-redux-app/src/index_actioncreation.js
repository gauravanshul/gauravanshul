/**
 * Action:
 * Just Object
 * How to pass Action object to reducer?
 * 1.via variable
 * 2.direcltly
 * 3.factory method -Action Creator
 */
import {
    createStore
} from 'redux';

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

const store = createStore(couterReducer);
//subscribe
store.subscribe(() => {
    //Get State From the Store
    const state = store.getState();
    console.log(`Counter(state) ${state}`);
})

//via variable
const COUNTER_ACTION = {
    type: 'INCREMENT'
}
store.dispatch(COUNTER_ACTION);
//directly
store.dispatch({
    type: 'INCREMENT'
});
//FACTORY method- Action Creator
const counterActionCreator = () => {
    return {
        type: 'INCREMENT'
    }
}
store.dispatch(counterActionCreator());