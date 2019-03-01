// Functional Comp  -- it is also know stateless comp
import React from 'react';

const ContactDetails = ( props ) => {
  console.log(props);
  
  return ( 
    <div className="card col-md-12">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <a href="#" className="card-link">{props.phone}</a>
        <a href="#" className="card-link">{props.email}</a>
      </div>
      <hr />
      <button className="btn btn-default btnSpacer" type="button">Edit</button>
      <button className="btn btn-default btnSpacer" type="button">
        Delete
      </button> 
    </div>
  );
}

export default ContactDetails;