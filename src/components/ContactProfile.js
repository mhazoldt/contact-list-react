import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class ContactProfile extends Component {
  render() {

    let contacts = this.props.contacts
    let contactIndex = this.props.match.params.contactIndex
    console.log(this.props.match.params.contactIndex)
    let name = contacts[contactIndex].name.first + " " + contacts[contactIndex].name.last
    let email = contacts[contactIndex].email
    let phone = contacts[contactIndex].phone
    let location = contacts[contactIndex].location.city + ", " + contacts[contactIndex].location.state
    return (
      <div>
        <nav>
          <div className="nav-wrapper" style={{textTransform: "capitalize"}}>
            <a href="#" className="brand-logo brand-margin">{name}</a>
          </div>
        </nav>
        <ul className="collection">
          <li className="collection-item">Email: {email}</li>
          <li className="collection-item">Phone: {phone}</li>
          <li className="collection-item" style={{textTransform: "capitalize"}}>Location: {location}</li>
        </ul>
        <a class="waves-effect waves-light btn" onClick={() => {window.history.back()}} style={{margin: "15px"}}>back</a>
      </div>
    );
  }
}

function mapStateToProps(appState) {
    console.log({appState})
  
    return {contacts: appState.contacts, selectedContact: appState.selectedContact}
  }
  
  export default withRouter(connect(mapStateToProps)(ContactProfile));