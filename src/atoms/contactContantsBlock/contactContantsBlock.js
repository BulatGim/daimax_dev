import React from 'react';
import "./contactContantsBlock.css"

const ContactContantsBlock = ({contact}) => {
    return (
        <a href={contact.link} className="ContactContantsBlock">
            <img src={contact.img} alt="" className="ContactContantsBlock__img"/>
            <h3 className="ContactContantsBlock__content">{contact.contactsContent}</h3>
        </a>
    );
};

export default ContactContantsBlock;