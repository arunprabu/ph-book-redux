const contactReducer = (state = [], action) => {   // state with default param and action 
  console.log(state, action);
  switch(action.type){
    case 'ADD_CONTACT':
      console.log(action.data);
      return state.concat([action.data]);
    default:
      return state;
  }
}
export default contactReducer;