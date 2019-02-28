// Functional Comp  -- it is also know stateless comp
import React from 'react';

const ContactList = ( props ) => {
  console.log(props);
  
  return ( 
    <div>
      <h2>
        Contact List
      </h2>
      <div className='postBox'>
        <p> John </p>
        <button className="btn btn-default disabled btnSpacer" type="button">
          Edit
        </button>
        <button className="btn btn-default btnSpacer" type="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactList;