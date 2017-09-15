/**
 * React and list rendering
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * List rendering: which forms a layout.
 * //1.List view
 *       ul li
 *  2.Grid View
 *      table tr
 *  3. Card Layout
 *     div - div
 *  create dom elements based on data set
 */
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number =>
    <li key={number.toString()}>{number}</li>
);
//console.log(listItems);
const element = <ul>{listItems}</ul>
//render(element  , root);
///////////////////////////////////////////////////////////
//functional component which accepts list as prop

const NumberListComponent = props => {
    const { numbers } = props;
    const listItems = numbers.map(number =>
       <li key={number.toString()}>{number}</li>);
    return (<ul>{listItems}</ul>);
}
//render(<NumberListComponent numbers={numbers} />, root);
//////////////////////////////////////////////////////////////
//component which takes list of objects
const HeroComponent = props => {
    const { heroes } = props;
    const heroListItem = heroes.map(hero =>
        <li key={hero.id.toString()}>{hero.name}</li>);
    return (<ul>{heroListItem}</ul>)
};

const HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
//render(<HeroComponent heroes={HEROES} />, root);
///////////////////////////////////////////////////////////////
//Grid Component
class HeroTable extends Component {
        render() {
        const { heroes } = this.props;
        return (<div>
            <h1>Hero Details</h1>
            <table className="table"> 
                <thead>
                    <tr>
                        <th>Hero Id</th>
                        <th>Hero Name</th>
                    </tr>
                </thead>
                <RowComponent heroes={heroes} />
            </table>
        </div>);
    }
}

let RowComponent = props => {
    const { heroes } = props;
    const heroRows = heroes.map(hero =>
        <tr key={hero.id.toString()}>
            <td>{hero.id}</td>
            <td>{hero.name}</td>
        </tr>);
    return (<tbody>{heroRows}</tbody>);
};
class SearchBar extends Component{
handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
handleFilterTextInputChange(e) {
    
    console.log(e.target.value);
}
    render() {
        return(<div>
         <input type="text"/>    
        </div>)
    }    
}
const App = () => {
    return (
        <div>
        <SearchBar />    
        <HeroTable heroes={HEROES} />    
        </div>
    )
}
render(<App/>, root);



