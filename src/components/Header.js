import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => (
    <header>
    <h1>Expensify application</h1>
    <NavLink  exact={true} to='/' activeClassName="is-active">Dashboard</NavLink>
    <NavLink to='/create' activeClassName="is-active">Create expenses</NavLink>
    <NavLink to='/help' activeClassName="is-active">Help</NavLink>
    <NavLink to='/edit' activeClassName="is-active">Edit expenses page</NavLink>
    </header>
);

export default Header;