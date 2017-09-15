import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <nav>
             <IndexLink to="/" activeClassName="active">Home</IndexLink>
             { "|" }
             <IndexLink to="/about" activeClassName="active">About</IndexLink>
             { "|" }
             <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
            </nav>
        );
    };
}
export default Header;