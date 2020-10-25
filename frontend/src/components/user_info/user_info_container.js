import { connect } from 'react-redux';
import UserInfo from './user_info';
import {fetchUser} from'../../actions/session_actions';

const mapStateToProps = (state) => {
    
    return {
        errors: state.errors.session,
        email: state.session.user.email,
        fetchedUser: state.users.data || {}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: user => dispatch(fetchUser(user)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo);