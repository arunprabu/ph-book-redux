import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACT } from './types';
import axios from 'axios';

//fake rest api url
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//receiving response data as posts and attaching an event type called FETCH_CONTACT and all the posts
export const fetchContacts = (contacts) => {
  return {
    type: FETCH_CONTACT,
    contacts
  }
};

//Initial Load to fetch all posts
export const fetchAllContacts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        //calling the above util method to process data, that are ready to be sent
        dispatch(fetchContacts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};