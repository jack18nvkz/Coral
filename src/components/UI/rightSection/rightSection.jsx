import React from 'react';
import classes from "./rightSection.module.css";
import ContactSection from "../contactSection/contactSection";
import ChatSection from "../chatSection/chatSection";
import SmallPlusLogo from "../svg/smallPlusLogo";

const RightSection = () => {
    return (
        <div className={classes.rightSection}>
            <div className={classes.leftContainer}>
                <ContactSection></ContactSection>
                <div className={classes.optionsContainer}>
                    <div className={classes.addContact}>
                        <SmallPlusLogo style={{width: '40px', height: '40px'}}></SmallPlusLogo>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className={classes.rightContainer}>
                <ChatSection></ChatSection>
                <div className={classes.chatEmpty}>
                    <p>Здесь пока ничего нет...</p>
                </div>
            </div>
        </div>
    );
};

export default RightSection;