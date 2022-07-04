import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
      ></ContactCard>
    );
  });
  return (
    <div className="container p-3">
      <div className="row ">
        <div className="col">
          <h2>Contact List</h2>
        </div>
        <div className="col-md-auto">
          <Link to="/add">
            <button className="btn btn-primary btn-lg">Add Contact</button>
          </Link>
        </div>
      </div>

      {renderContactList}
    </div>
  );
};

export default ContactList;
