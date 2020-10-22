import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import UserInfo from './user_info';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo);