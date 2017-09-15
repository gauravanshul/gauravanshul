/**
 * store.dispatch(Action)---- |-------->reducer---return---store
 * Types of actions:
 * 1.Synchrous Action
 *    dispatch----invoke---reducer--return ---store
 * 2.Asyn Action
 *    dispatch ---wait for input---once input is ready---invoke--reducer
 *    ---store.
 *  How to implement wait logic?
 *   middlewares
 * What is middle ware?
 *    middleware is just function.
 *    but it is not normal function rather than it is curry function.
 * Curry Function?
 * Currying is when a function, instead of taking all
 * arguments at one time, takes the first one and
 *  returns a new function that takes the second one
 * and returns a new function which takes the third one,
 *  and so forth, until all arguments have been fulfilled.
var dragon = function(name) {
    return function(size) {
        return function(element) {
            return name + size + element;
        }
    }
}

console.log(dragon('test')(12)('lighting'));

 What is this  "middleware" thing?


Generally speaking middleware is something that
goes between parts A and B of an application to
transform what A sends before passing it to B. So instead of having:

Normal Flow:

 A -----> B
 we end up having

Middleware Flow:

 A ---> middleware 1 ---> middleware 2 ---> middleware 3 --> ... ---> B



How could middleware help us in the Redux context? 

 Well it seems that the function that we are
 returning from our async action creator cannot be handled natively by Redux
 but 
 if we had a middleware between our action creator and our reducers, we could transform this  function into something  that suits Redux:

 action ---> dispatcher ---> middleware 1 ---> middleware 2 ---> reducers

In Redux, middleware are functions that must conform to a very specific signature and follow a strict structure:

    var anyMiddleware = function ({ dispatch, getState }) {
        return function(next) {
            return function (action) {
                // your middleware-specific code goes here
            }
        }
    }

Ajax Programming and redux middlewares:

Ajax programming is wrapped inside thunk middleware.
Ajax programming can be done using any ajax lib -jquery,rawjavascript
 or any third party ajax,fetch.js
Our use case fetch ajax lib.

What we are going to do? we are writing fetch programming inside
thunkMiddleware.
Steps:
1.install thunk
npm install redux-thunk --save

2.import applyMiddleware function redux



var dragon = function(name) {
    return function(size) {
        return function(element) {
            return name + size + element;
        }
    }
}
//curry using es 6 arrow
let newdragon = name => size => element => `${name}${size}${element}`;
console.log(newdragon('test')(12)('lighting'));
*/
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';


//Reducer get data from webservice:
let photoReducer = (photos = [], action) => {
    switch (action.type) {
        case "GET_PHOTOS":
            return [0,...photos, action.data];
        default:
            return photos;
    }
}
//We have applied middleware capability to store
const middleWareStore = applyMiddleware(thunkMiddleware)(createStore);
//We have added reducer
const store = middleWareStore(photoReducer);

//Action-Asyn
//action creator
/* function getPhotoActionCreator(data) {
    return {
        type: "GET_PHOTOS",
        data // input
    }
} */
const getPhotoActionCreator = data => ({
    type: 'GET_PHOTOS',
    data
});

//Middleware code
/* function getPhotos(url) {
    return function (dispatch) {
        //Ajax code will go--you can any ajax lib
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                //wait logic here goes:
                //dispatch willl call reducer when data is available.
                dispatch(getPhotoActionCreator(res));
            });
    }
} */
;
const getPhotos = url => dispatch => {
    //Ajax code will go--you can any ajax lib
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(res => {
            //wait logic here goes:
            //dispatch willl call reducer when data is available.
            dispatch(getPhotoActionCreator(res));
        });
}

store.subscribe(() => {
    const photos = store.getState();
    console.log(photos);
});

//store.dispatch(getPhotos('https://jsonplaceholder.typicode.com/photos'));
