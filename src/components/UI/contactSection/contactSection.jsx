import React, {useState} from 'react';
import classes from "./contactSection.module.css";
import Contact from "../contact/contact";

const ContactSection = () => {
    const [contacts, setContacts] = useState([
        {name: '1', key: 1},
        {name: '1', key: 2},
        {name: '1', key: 3},
        {name: '1', key: 4}
    ]);

    return (
        <div className={classes.contactSection}>
            {contacts.map( (c) => <Contact key={c.key}/>)}
        </div>
    );
};

export default ContactSection;