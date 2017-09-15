/**
 * React Component renders childerens
 */
import React from 'react';
import { render } from 'react-dom';

//<App /> - Self closing- You are telling that App dont have any
//direct childrens <div/>
//<div><h1></h1></div>
// {props.children} : take elements /components as prop

const Container = (props) => {
    return (
        <div>
         {props.children}
        </div>
  )    
}
const Greeting = () => {
    return (
        <h1>Greeting</h1>
    )
}
const App = () => {
    return (
        <Container>
           <div>    
                <Greeting />
                 <p>This is Demo App</p>  
            </div>
        </Container>    
    
    )
}
render(<App />, root);