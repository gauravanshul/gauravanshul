import React,{Component} from 'react';
import { render } from 'react-dom';
/*Parent component property can be passed to child
as prop
*/
const SearchBar = props => {
    const { item } = props;
    return (
        <div>
            <SearchDetail item={item}/>
        </div>
    )
}
const SearchDetail = props => {
    const { item } = props;
    return (
        <div>
            <h1>{item}</h1>
        </div>
    )
}
const Header = props => {
    const { value } = props;
    return (
        <div>
          <SearchBar item={value} />
        </div>
    )
}
render(<Header value="products" />, root);