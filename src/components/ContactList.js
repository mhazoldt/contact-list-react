import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'

class ContactList extends Component {
  render() {

    console.log("contact list", this.props)

    let contacts = this.props.contacts

    console.log({contacts})

    let contactsHtml = contacts.map((contact, idx) => {
        return (
          <div key={idx} className="row">
            <div className="col s12 m3">
              <div className="card">
                <div className="card-content display-flex">
                  <i className="material-icons">account_circle</i>
                  <p className="content-margin">
                    <NavLink className="black-text" to={"/" + idx}>{contact.name.first} {contact.name.last}</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
    })

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo brand-margin">Contact List</a>
          </div>
        </nav>
        <div className="contact-list">
            {contactsHtml}
        </div>
      </div>
    );
  }
}

function mapStateToProps(appState) {
    console.log({appState})
  
    return {contacts: appState.contacts, selectedContact: appState.selectedContact}
  }
  
  export default withRouter(connect(mapStateToProps)(ContactList));