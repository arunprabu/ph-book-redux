import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/shared/Header';
import Dashboard from './components/home/Dashboard';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        {/* browser router holds  the paths for your router */}
        <div>
          <Header />
          <div className="marginFix">
            <Switch>
              <Route path='/' component={Dashboard} exact></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/contacts' component={Contacts}></Route>
               {/* <Route path="/posts/:id" component={PostList}  exact strict/> */}
              {/* <Route component={PageNotFound} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
