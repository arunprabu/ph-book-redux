import React, {Component} from 'react';
import { connect } from 'react-redux';
import ContactDetails from './ContactDetails';

class ContactList extends Component {

  render() {
    console.log(this.props);   //  re-render if changes happened in store
    return ( 
      <div>
        <h2>Contact List</h2>
        <div>
          {/* Todo: Diplay bootstrap alert with danger class to show 'no contacts found' */}
          {this.props.contacts.map( (contact, index) => {
             return(
               <ContactDetails name={contact.name} phone={contact.phone} email={contact.email} key={index}/>
             )
          })}
        </div>
      </div>
    );
  }
}

//for unidirectional data flow-- state should not be editable
const mapStateToProps = (state) => {
  return {
    contacts: state
  }
}
export default connect(mapStateToProps)(ContactList);