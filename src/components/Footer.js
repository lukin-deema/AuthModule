import React from 'react';
import FilterLink from '../containers/FilterLink';
import * as constants from '../constants';

const Footer = () => (
    <p>
        {"Show: "}
        <FilterLink filter={constants.VISIBLE_ALL}>
            All
        </FilterLink>
        {", "}
        <FilterLink filter={constants.VISIBLE_REGISTERED}>
            Active
        </FilterLink>
        {", "}
        <FilterLink filter={constants.VISIBLE_DELETED}>
            Completed
        </FilterLink>
    </p>
);

export default Footer;