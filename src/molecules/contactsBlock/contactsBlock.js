import React from 'react';
import {contactsBlock} from "../../constants";
import "./contactsBlock.css"
import ContactContantsBlock from "../../atoms/contactContantsBlock/contactContantsBlock";

const ContactsBlock = () => {

    return (
        <div className="contactsBlock">
            {contactsBlock.map(contact=>
                <ContactContantsBlock contact={contact}/>

            )}
        </div>
    );
};

export default ContactsBlock;