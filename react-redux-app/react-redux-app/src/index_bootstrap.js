/**
 * Styling Component
 *
 */
import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

    
const Welcome = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Welcome to landing page!</h1>
                <p>This is an example for jumbotron.
                </p>
                <p>
                <a className="btn btn-primary btn-lg" role="button">
                        Learn more
                </a>
                </p>
            </div>
        </div>
    );
}

render(< Welcome />, root);
