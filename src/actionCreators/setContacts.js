export function setContacts() {

    let data = require(`../data/contacts.json`)


    return (
        {type: 'SET_CONTACTS', contacts: data}
    )

}