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
import api from "../api/contacts";
import EditContact from "./EditContact";
import { createBrowserHistory } from 'history';
import UpdateContact from "./UpdateContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(0);
  const [searchContact, setSearchContact]=useState("");
  const [searchResults, setSearchResults]= useState([]);

  const history = createBrowserHistory();

  // Retrieve Contacts using API
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) {
        console.log(allContacts);
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, []);

  // Adding new contact
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    //setContacts([...contacts, contact]);
    setContacts([...contacts, response.data]);
  };

  //Removing contact
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //Update Contact
  const updateContactHandler = async (contact) => {
    console.log(contact);
    const response = await api.put(`/contacts/${contact.id}`, contact);
    //setContacts([...contacts, contact]);
    setContacts(contacts.map(contact =>{
      return contact.id ===response.data.id? {...response.data} : contact;
    }));
  };

  const searchHandler = (searchContact)=>{
    setSearchContact(searchContact)
    if(searchContact !== ""){
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(searchContact.toLowerCase());
      })
      console.log(newContactList);
      setSearchResults(newContactList);
    }
    else{
      setSearchResults(contacts);
    }
  }

  // useEffect(() => {
  //   console.log(contacts);
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <div className>
        <Router history = {history}>
          <NavBar />
          <Switch>
            <Route
              path="/"
              exact
              element={
                <ContactList
                  contacts={searchContact.length < 1?contacts:searchResults}
                  getContactId={removeContactHandler}
                  search = {searchContact}
                  searchKeyword = {searchHandler}
                />
              }
            />
            <Route
              path="/add"
              exact
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            <Route
              path="/edit"
              exact
              element={
                <UpdateContact updateContactHandler={updateContactHandler} />
              }
            />
            <Route path="/contact/:id" exact element={<ContactDetails />} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
