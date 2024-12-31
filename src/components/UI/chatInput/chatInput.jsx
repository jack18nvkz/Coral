import React from 'react';
import classes from "./chatInput.module.css";
import SendLogo from "../svg/sendLogo";
import SmileLogo from "../svg/smileLogo";

const ChatInput = () => {
    return (
        <div className={classes.chatInput}>
            <div className={classes.inputContainer}>
                <textarea className={classes.inputField} placeholder={"Сообщение"}/>
                <div className={classes.sendSmile}>
                    <SmileLogo style={{width: '35px', height: '35px', stroke: '#727F85'}}></SmileLogo>
                </div>
            </div>
            <div className={classes.sendButton}>
                <SendLogo style={{width: '35px', height: '35px', stroke: '#727F85'}}></SendLogo>
            </div>
        </div>
    );
};

export default ChatInput;