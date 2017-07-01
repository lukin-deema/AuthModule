import React from 'react';
import PropTypes from 'prop-types';
import Off from 'material-ui/svg-icons/toggle/star-border';
import On from 'material-ui/svg-icons/toggle/star';
import All from 'material-ui/svg-icons/toggle/star-half';
import * as constants from '../constants';

const Link = ({ active, onClick, filter }) => {
    if (active) {
        return <span>{selectComponents(filter)}</span>
    }

    return (
        <a href="#"
           onClick={e => {
               e.preventDefault();
               onClick()
           }}
        >
            {selectComponents(filter)}
        </a>
    )
};

const selectComponents = (filter) => {
    switch (filter) {
        case constants.VISIBLE_ALL:
            return <All/>;
        case constants.VISIBLE_DELETED :
            return <Off/>;
        case constants.VISIBLE_REGISTERED :
            return <On/>;
    }
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    filter:  PropTypes.string.isRequired,
};

export default Link;