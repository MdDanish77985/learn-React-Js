import React from "react";
import ContactCard from "./ContactCard";
import {useNavigate } from "react-router-dom";


const ContactList = (props) => {
    console.log(props);
    const navigate =  useNavigate(); 
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const contacts = props.contacts;
    const renderContactList =contacts.map((contact) => {

        return(
        <ContactCard 
            contact={contact} 
            clickHandler={deleteContactHandler}
            key={contact.id}/>
        );   
    });
    return(
        // < class="main">
        // <h2>Contact List</h2>
        // <div className="ui celled list"> {renderContactList}</div>
        <div class ="main">
            <h2>Contanct List
            <div>
                <button onClick={() => navigate("/add")} className="ui button blue right">Add Contact</button>
            </div>
        </h2>
       <div className="ui celled list"> {renderContactList}
    </div>
    </div>
    );
};
export default ContactList;