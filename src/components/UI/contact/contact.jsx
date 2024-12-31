import React from 'react';
import classes from "./contact.module.css";
import Icon from "../icon/icon";
import DottedLogo from "../svg/dottedLogo";

const Contact = () => {
    return (
        <div className={classes.contact}>
            <Icon style={{
                margin: 'auto',
                width: '45px',
                height: '45px',
                borderRadius: '25px',
                border: 'none',
                backgroundColor: '#676967'
            }}></Icon>
            <div className={classes.bodyContainer}>
                <p><strong>Name</strong></p>
                <p>status</p>
            </div>
            <div className={classes.options}>
                <DottedLogo style={{width: '30px', height: '30px'}}></DottedLogo>
            </div>
        </div>
    );
};

export default Contact;