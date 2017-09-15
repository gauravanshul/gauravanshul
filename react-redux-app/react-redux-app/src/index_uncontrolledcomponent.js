/**
 * Controlled and UnControlled Components:
 * How to access DOM object from react?
 * 1.using Synevent object
 *        Controlled Components
 * 2.using ref keyword
 *       UnControlled Components
 *  <input type="text" ref={(txt)=>{}} />
 */

 /**
 * UnControlled Component
 */
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => { this.textInput = input; }} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focus}
                />
            </div>
        );
    }
}
//http://paste.ubuntu.com/25495195/

ReactDOM.render(<CustomTextInput />, document.getElementById('root'));