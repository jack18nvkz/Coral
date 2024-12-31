import React from 'react';
import classes from "./rightSection.module.css";
import ContactSection from "../contactSection/contactSection";
import ChatSection from "../chatSection/chatSection";

const RightSection = () => {
    return (
        <div className={classes.rightSection}>
            <ContactSection></ContactSection>
            <hr></hr>
            <ChatSection></ChatSection>
        </div>
    );
};

export default RightSection;