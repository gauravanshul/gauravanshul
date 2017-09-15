import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
/**
 * State and Props together
 * State of a Component can be passed as a prop to another Component
 */
//searchBar is statefull which has state ,search item
class SearchBar extends Component{
    //inital state of search bar value
    state = { value: '' }
    //event binding
    search = this.search.bind(this);
    search(event) {
        let searchValue = event.target.value;
        this.setState({ value: searchValue });
    }

  //override
    render() {
        //const { value } = state;
        return (
            <div className="container">
             <h1>Search App</h1>    
            <div className="row">
                <div className="col-md-12">
                 <input type="text" onKeyUp={this.search} placeholder="search"/>
              </div>       
            </div>
             <div className="row">
                <div className="col-md-12">
                 <SearchDetail searchItem={this.state.value} />      
              </div>       
            </div>
            </div>    
        );
  }  
} 
/**
 * 
 * statelesss Component
 * Why?
 * 1.It never manages data.Gets data from the Parent
 * 
 */
const SearchDetail = props => {
    const { searchItem } = props;
    return(
        <div className="container">
            <p className="lead">{searchItem}</p>    
        </div>
    )
}
render(<SearchBar />, root);
