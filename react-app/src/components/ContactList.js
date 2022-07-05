import React, {useRef} from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);
  const inputTerm = useRef("")
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

  const getSearch = ()=> {
    console.log(inputTerm.current.value)
    props.searchKeyword(inputTerm.current.value)
  }
  return (
    <div className="container p-3">
      <div className="row my-auto">
        <div className="col">
          <h2>Contact List</h2>
        </div>
        <div className="col-md-auto">
          <input className="form-control" ref={inputTerm} type="text" placeholder="Search" value={props.search} onChange= {getSearch}></input>
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
