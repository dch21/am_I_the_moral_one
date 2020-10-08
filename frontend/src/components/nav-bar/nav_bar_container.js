import {connect} from 'react-redux'; 
import {logout, login} from '../../actions/session_actions'; 

import NavBar from './nav_bar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDTP = dispatch => ({
    logout: () => dispatch(logout()), 
    login: (user) => dispatch(login(user))
})

export default connect(
    mapStateToProps, mapDTP
)(NavBar);