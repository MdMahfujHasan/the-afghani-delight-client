import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    const active = {
        textDecoration: 'overline',
        color: 'teal',
        fontWeight: 'bold',
        textDecorationThickness: '2px',
        marginRight: '30px'
    }
    const notActive = {
        color: 'white',
        marginRight: '30px'
    };
    return (
        <NavLink
            to={to}
            style={({ isActive }) => isActive ? active : notActive}
        >
            {children}
        </NavLink >
    );
};

export default ActiveLink;