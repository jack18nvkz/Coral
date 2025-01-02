import React from 'react';
import classes from "./message.module.css";
import CheckLogo from "../svg/checkLogo";
import WaitLogo from "../svg/waitLogo";


const Message = ({}) => {
    let date = new Date();
    return (
        <div className={classes.message}>
            <div className={classes.text}>Some text to display as a message.</div>
            <div className={classes.status}>
                <CheckLogo style={{stroke: '#338B8A', width: '20px', height: '20px'}}></CheckLogo>
                <WaitLogo style={{stroke: '#A0A4A2', width: '20px', height: '20px'}}></WaitLogo>
                <div className={classes.time}>{`${date.getHours()}:${date.getMinutes()}`}</div>
            </div>
        </div>
    );
};

export default Message;