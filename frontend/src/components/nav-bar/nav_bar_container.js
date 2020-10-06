import {connect} from 'react-redux'; 
import {logout} from '../../actions/session_actions'; 

import NavBar from './nav_bar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(
    mapStateToProps, mapDTP
)(NavBar);