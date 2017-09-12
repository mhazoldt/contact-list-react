import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import ContactProfile from './components/ContactProfile';
import ContactList from './components/ContactList';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/combined'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const store = createStore(reducer, {contacts: [], selectedContact: ''})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/:contactIndex" component={ContactProfile} />
                    <Route path="/" component={ContactList} />
                </Switch>
            </App>
        </BrowserRouter>  
    </Provider>, document.getElementById('root'));
registerServiceWorker();
