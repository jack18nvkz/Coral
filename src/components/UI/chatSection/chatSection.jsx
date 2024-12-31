import React from 'react';
import classes from "./chatSection.module.css";
import ChatHead from "../chatHead/chatHead";
import ChatField from "../chatField/chatField";
import ChatInput from "../chatInput/chatInput";

const ChatSection = () => {
    return (
        <div className={classes.chatSection}>
            <ChatHead></ChatHead>
            <ChatField></ChatField>
            <ChatInput></ChatInput>
        </div>
    );
};

export default ChatSection;