import { combineReducers } from 'redux'


function setContacts(state=[], action) {
    switch(action.type){
        case 'SET_CONTACTS': {
            console.log("SET_CONTACTS reducer")
            console.log(action.type)
            console.log(action.contacts)
            state = action.contacts
            console.log(state)
            return state
        }
        default: {
            return state
        }
    }
   
}

function selectContact(state='', action) {
    switch(action.type){
        case 'SELECT_CONTACT': {
            console.log(action.type)
            return state
        }
        default: {
            return state
        }
    }
   
}

const allReducers = combineReducers({contacts: setContacts, selectedContact: selectContact})

export default allReducers