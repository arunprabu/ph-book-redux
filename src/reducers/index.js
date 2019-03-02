import { combineReducers } from 'redux';
import contacts from './contactReducer';
// import account from './accountReducer';

//param should be object for combineReducers
export default combineReducers({
    contacts: contacts
});