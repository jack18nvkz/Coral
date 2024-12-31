import React, { useState } from 'react';
import classes from "./leftSection.module.css";
import Icon from "../icon/icon";
import ButtonLeftSection from "../buttons/buttonLeftSection";
import ChatsLogo from "../svg/chatsLogo";
import ContactsLogo from "../svg/contactsLogo";
import GroupsLogo from "../svg/groupsLogo";
import OptionsLogo from "../svg/optionsLogo";
import LogoutLogo from "../svg/logoutLogo";

const LeftSection = () => {
    const [type, setType] = useState('');
    const onClick = (type) => {
        setType(type);
    }

    return (
        <div className={classes.leftSection}>
            <Icon style={{
                    margin: '5px auto auto auto',
                    width: '65px',
                    height: '65px',
                    borderRadius: '50px'
                }} ></Icon>
            <ButtonLeftSection
                isActive={type === 'chats'}
                onClick={() => onClick('chats')}>
                <ChatsLogo></ChatsLogo>
            </ButtonLeftSection>
            <ButtonLeftSection
                isActive={type === 'contacts'}
                onClick={() => onClick('contacts')}>
                <ContactsLogo></ContactsLogo>
            </ButtonLeftSection>
            <ButtonLeftSection
                isActive={type === 'groups'}
                onClick={() => onClick('groups')}>
                <GroupsLogo></GroupsLogo>
            </ButtonLeftSection>
            <ButtonLeftSection
                isActive={type === 'options'}
                onClick={() => onClick('options')} style={{margin: 'auto auto 5px auto'}}>
                <OptionsLogo></OptionsLogo>
            </ButtonLeftSection>
            <ButtonLeftSection>
                <LogoutLogo></LogoutLogo>
            </ButtonLeftSection>
        </div>
    );
};

export default LeftSection;