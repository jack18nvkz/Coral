import React, {useState} from 'react';
import classes from "./chatHead.module.css";
import PhoneLogo from "../svg/phoneLogo";
import VideoLogo from "../svg/videoLogo";

const ChatHead = () => {
    return (
        <div className={classes.chatHead}>
            <div className={classes.contactInfo}>
                <p>Name</p>
            </div>
            <div className={classes.button}>
                <PhoneLogo style={{width: '30px', height: '30px'}}></PhoneLogo>
            </div>
            <div className={classes.button}>
                <VideoLogo style={{width: '30px', height: '30px'}}></VideoLogo>
            </div>
        </div>
    );
};

export default ChatHead;