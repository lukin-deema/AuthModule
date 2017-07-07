import { connect } from 'react-redux';
import Routes from '../Routes';

const mapStateToProps = (state, ownProps) => ({
    login: state.login
});

const routesConnected = connect(
    mapStateToProps
)(Routes);

export default routesConnected;