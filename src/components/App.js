import React, { Component } from 'react';
import '../styles/App.css';
import { NavLink } from 'react-router-dom';
import { setContacts } from '../actionCreators/setContacts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(setContacts())
  }


  render() {
    console.log("app")

    return (
      <div className="App">

        {this.props.children}
      </div>
    );
  }
}



function mapStateToProps(appState) {
  console.log({appState})

  return {contacts: appState.contacts, selectedContact: appState.selectedContact}
}

export default withRouter(connect(mapStateToProps)(App));
