import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import NavBar from "./NavBar";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  );
  const [selectedContact, setSelectedContact] = useState(0);
  const addContactHandler = (contact) => {
    console.log(contact);
    //setContacts([...contacts, contact]);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    console.log(contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className>
        <Router>
            <NavBar />
          <Switch>
            <Route
              path="/"
              exact
              element={
                <ContactList
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              }
            />
            <Route
              path="/add"
              exact
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            <Route path="/contact/:id" exact element={<ContactDetails />} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
