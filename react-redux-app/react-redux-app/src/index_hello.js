/**
 * 1.create DOM Element dynamically using react
 */
import React from 'react';
import ReactDOM from 'react-dom';

//create H1 element using jsx
const hello = <h1>Hello React!</h1>;
console.log(typeof hello);
const pi = 8;
const name="test"
console.log(typeof pi);
console.log(typeof name);
//create H1 element and insert into <div id="root">
//render(nameoftheelementtobeinserted,where to be inserted in index.html)
ReactDOM.render(hello, document.getElementById('root'));

//http://paste.ubuntu.com/25449621/