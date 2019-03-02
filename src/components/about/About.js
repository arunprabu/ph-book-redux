// Functional Comp  -- it is also know stateless comp
import React from 'react';
import ContactDetails from '../contacts/ContactDetails';

const About = ( props ) => {
  console.log(props);
  
  return ( 
    <div>
      <h1>About</h1>
      <ContactDetails />
    </div>
  );
}

export default About;