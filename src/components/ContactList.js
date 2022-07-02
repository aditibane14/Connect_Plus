import React from "react";
import ContactCard from "./ContactCard";
import { Link  } from "react-router-dom";

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler = {deleteContactHandler}></ContactCard>;
    });
    return <div className="ui celled list">
    <h2>Contact List</h2>
    <Link to = "/add">
    <button className="ui button blue">Add Contact</button>
    </Link>
    {renderContactList}
    </div>;
};

export default ContactList;