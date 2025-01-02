import React, {useState} from 'react';
import classes from "./contactSection.module.css";
import Contact from "../contact/contact";

const ContactSection = () => {
    const [contacts, setContacts] = useState([

    ]);

    return (
        <div className={classes.contactSection}>
            {contacts.map( (c) => <Contact key={c.key}/>)}
        </div>
    );
};

export default ContactSection;