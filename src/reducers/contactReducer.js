import { ADD_CONTACT, DELETE_POST, FETCH_CONTACT } from '../actions/types';

const contactReducer = (state = [], action) => {   // state with default param and action 
  console.log(state, action);
  switch(action.type){
    case ADD_CONTACT:
      console.log(action.data);
      return state.concat([action.data]);
    case FETCH_CONTACT:
      return action.contacts;
    default:
      return state;
  }
}
export default contactReducer;