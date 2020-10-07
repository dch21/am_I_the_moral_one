import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <button onClick={this.logoutUser} className="logout-button">Logout</button>
                </div>
            );
        } else {
            return (
                <div className="nav-links">
                    <Link to={'/signup'}>Signup</Link>
                    <br></br>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="space"></div>
                <Link to="/" className="nav-title">Am I the Moral One?</Link>
                { this.getLinks()}
            </div>
        );
    }
}

export default NavBar;