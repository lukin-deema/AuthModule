import {connect} from 'react-redux';
import Routes from '../Routes';

const mapStateToProps = (state, ownProps) => {
    return {
        nextRoute: state.route,
        login: state.login
    }
};

const routesConnected = connect(
    mapStateToProps
)(Routes);

export default routesConnected;