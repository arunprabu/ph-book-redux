const contactReducer = (state = [], action) => {   // state with default param and action 
  switch(action.type) {
    case 'ADD_CONTACT':
      return state.concat([action.data]);
    default:
      return state;
  }
}
export default contactReducer;