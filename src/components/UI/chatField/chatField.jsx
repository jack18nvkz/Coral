import React from 'react';
import classes from "./chatField.module.css";
import Message from "../message/message";

const ChatField = () => {
    return (
        <div className={classes.chatField}>
            <Message side={'right'}></Message>
            <Message></Message>
            <Message></Message>
        </div>
    );
};

export default ChatField;