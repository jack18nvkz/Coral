import React from 'react';
import classes from "./logo.module.css";

const CheckLogo = ({style}) => {
    return (
            <svg className={classes.icon} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
            </svg>
    );
};

export default CheckLogo;