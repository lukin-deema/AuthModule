import React from 'react';
import FilterLink from '../containers/FilterLink';
import * as constants from '../constants';

const Footer = () => (
    <p>
        <FilterLink filter={constants.VISIBLE_REGISTERED}/>
        <FilterLink filter={constants.VISIBLE_DELETED}/>
        <FilterLink filter={constants.VISIBLE_ALL}/>
    </p>
);

export default Footer;