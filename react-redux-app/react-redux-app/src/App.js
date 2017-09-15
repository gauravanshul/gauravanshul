/**
 * Application Component
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Login } from './customer/components/Login';

export  const Author =<h1>FaceBook</h1>

class Application extends Component{
    render() {
        return(<Login/>)
    }     
}
export default Application;