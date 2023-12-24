import React,{useState, useEffect} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 } from 'uuid';

function App() {
  const lOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts,{id : v4(),...contact}]);
  };

  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) =>{
  //     return contact.id !==id;
  //   });
  //   setContacts(newContactList);
  // };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
    localStorage.setItem(lOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(lOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  },[]);
  useEffect(() => {
    // console.log("read from storage");
    if (contacts.length > 0) localStorage.setItem(lOCAL_STORAGE_KEY,JSON.stringify(contacts));
    // console.log("The ID is =", v4() )
},[contacts]);
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
