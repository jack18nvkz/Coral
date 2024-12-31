import React from 'react';
import classes from "./buttonLeftSection.module.css";

const ButtonLeftSection = ({onClick, isActive, children, style}) => {
    return (
        <div className={isActive ? classes.background + ' ' + classes.active : classes.background}
             onClick={onClick}
             style={style}
        >
            {children}
        </div>
    );
};

export default ButtonLeftSection;