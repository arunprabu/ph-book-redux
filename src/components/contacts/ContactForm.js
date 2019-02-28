import React, { Component } from 'react';

class ContactForm extends Component {
  // constructor(){
  //   super(props);
  //   console.log(props);
  // }
  

  onContactSubmit = (event) => {
    event.preventDefault();
    console.log( this);
    const name = this.getName.value;
    const email = this.getEmail.value;
    const phone = this.getPhone.value;

    console.log(name, email, phone);

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
          <input type="email" 
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

export default ContactForm;