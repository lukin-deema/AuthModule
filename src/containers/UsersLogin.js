import {connect} from 'react-redux';
import {login} from '../actions';
import UsersLogin from '../components/UsersLogin';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: ({email, password}) => {
        dispatch(login({email, password}))
    }
});

const UsersLoginConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersLogin);

export default UsersLoginConnected;