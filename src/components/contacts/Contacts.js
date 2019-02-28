// Functional Comp  -- it is also know stateless comp
import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Contacts = ( props ) => {
  console.log(props);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ContactForm />
        </div>
        <div className="col-md-8">
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default Contacts;