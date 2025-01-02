import React from 'react';
import classes from "./logo.module.css";

const SmallPlusLogo = ({style}) => {
    return (
        <svg className={classes.icon} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6V18M18 12L6 12"/>
        </svg>
    );
};

export default SmallPlusLogo;