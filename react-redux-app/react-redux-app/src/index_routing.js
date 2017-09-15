/**
 * Routing and Navigation
 * 1.install routing lib - router 4.
 * Router 4 is dynamic routing.
 * >npm install react-router --save
 * >npm install react-reacter-dom --save
 * Objects and Components:
 *  1.BrowserRouter as Router,
    2.Route,
    3.Link
 * 
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * BrowserRouter:
 * A <Router> that uses the HTML5 history API
 * (pushState, replaceState and the popstate event)
 * to keep your UI in sync with the URL.
 */
/**
 * Router:
 *  Its most basic responsibility is to render some UI
 *  when a location matches the route’s path.
 */
/**
 * Link:
 *  Which represents HyperLink.
 *  Link is representation of hyperlink.
 */

 ///Getting Navigation
 //Components:
const Home = () => {
    return (
        <div>
              <h1>Home</h1>
         </div>   
     )
 }
const About = () => {
    return (
        <div>
              <h1>About</h1>
         </div>   
     )
}
const Topic = ({match}) => {
    return (
        <div>
            <h1>Topic {match.params.topicId}</h1>    
        </div>
    )
}
    /**Nesting Routing
     *
     *  /training/react --- TrainingDetailsComponent
     *  /training/angular
     *  /training/es6
     */
 /**
  * match Object propertes
   
    params - (object) Key/value pairs parsed from the URL
              corresponding to the dynamic segments of the path
              /training/react/:id
              /training/react/id?subtopic=3
    isExact - (boolean) true if the entire URL was matched
               (no trailing characters)
    path - (string) The path pattern used to match.
            Useful for building nested <Route>s
    url - (string) The matched portion of the URL.
           Useful for building nested <Link>s

  */
const Training = ({ match }) => { //props.match
    //const {match} = props
    return (
        <div>
            <h1>Training</h1>
            <ul>
      <li>
        <Link to={`${match.url}/react`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/angular`}>
          Rendering with Angular
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/es6`}>
          Building with ES6
        </Link>
      </li>
            </ul>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Topic.</h3>
    )}/>
  </div>        
     )
}
    
    
 const Application = () => (
  <Router>
    <div className="container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/training">Training</Link></li>         
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/training" component={Training}/>       
    </div>
  </Router>
)
render(<Application />, root);