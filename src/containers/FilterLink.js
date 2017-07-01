import { connect } from 'react-redux';
import { toggleUserFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
    filter: ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(toggleUserFilter(ownProps.filter))
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;