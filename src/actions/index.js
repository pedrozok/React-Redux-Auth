import axios from 'axios';
import {browserHistory} from 'react-router';
import Notifications, {notify} from 'react-notify-toast';

import {API_HOST} from './../Aux/settings';


export const getUserProfile = () => {

  var token = localStorage.getItem('token');

  var configs = {
    headers: { 'Authorization': `Bearer ${token}` },
    validateStatus:  (status) => {
      return status < 500; // Reject only if the status code is greater than or equal to 500
    }
  }

  let request = axios.get(API_HOST +'/api/profile', configs);
  return (dispatch) => {
    request.then((response) => {

      if (response.status === 200 || response.status === 201) {

        dispatch({
          type: 'GET_PROFILE',
          payload: response.data
        });

        console.log('called');
      }
      else if (response.status === 400) {
        notify.show(response.data.message, 'error', 3000)
      }
    });

    request.catch((error) => {
      console.log(error);
    });
  }
}


export const doLogin = (credentials) => {

  // only redirect to catch errors above 500, all the other error codes will
  var configs = {
    validateStatus:  (status) => {
      return status < 500; // Reject only if the status code is greater than or equal to 500
    }
  }

  let request = axios.post(API_HOST + '/api/users/authenticate', credentials, configs);

  return (dispatch) => {

    request.then((response) => {
      // check the reponse type ..
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: 'DO_LOGIN' ,
          payload: response.data
        });

        localStorage.setItem('token', response.data.id_token);
        browserHistory.push('/dashboard');
      }
      else if (response.status === 400) {
        notify.show(response.data.message, 'error', 3000)
      }

    });

    request.catch((error) => {});

  }

}

export const doRegistration = (payload) => {

  var configs = {
    validateStatus:  (status) => {
      return status < 500; // Reject only if the status code is greater than or equal to 500
    }
  }

  let request = axios.post(API_HOST + '/api/users', payload, configs);

  return (dispatch) => {

    request.then((response) => {

      console.log(response);

      // check the reponse type ..
      if (response.status === 200 || response.status === 201) {

        if (response.data.success) {
          browserHistory.push('/');
          notify.show(response.data.message, 'error', 3000);
        }


      }
      else if (response.status === 400) {
        notify.show(response.data.message, 'error', 3000)
      }

    });

    request.catch((error) => {
      console.log(error);
    });

  }

}

export const doLogout = () => {

  return (dispatch) => {

   localStorage.removeItem('token');

    dispatch({
      type: 'DO_LOGOUT'
    });

    browserHistory.push('/');

  }

}
