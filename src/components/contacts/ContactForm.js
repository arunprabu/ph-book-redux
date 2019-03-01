import React, { Component } from 'react';
import {connect} from 'react-redux';

class ContactForm extends Component {  

  onContactSubmit = (event) => {
    event.preventDefault();
    console.log( this);

    //attach the data within it 
    const data = {
      name: this.getName.value,
      email: this.getEmail.value,
      phone: this.getPhone.value
    } 

    //dispatch an action with the data
    this.props.dispatch({
      type:'ADD_CONTACT',
      data //es6 if names of properties and values matching then this is syntax
    }); 

    //clear the form fields
    this.getName.value = '';
  }

  render(){
    return ( 
      <form onSubmit={this.onContactSubmit}>
        <h2>Add a Contact</h2>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputName" 
            placeholder="Name"
            ref={(input)=>this.getName = input} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email" 
            ref={(input)=>this.getEmail = input} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPhone">Phone</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputPhone" 
            placeholder="Phone"
            ref={(input)=>this.getPhone = input} />
        </div>
        
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    );
  }
  
}

export default connect()(ContactForm);