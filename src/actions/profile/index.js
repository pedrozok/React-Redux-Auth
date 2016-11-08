import axios from 'axios';
import {browserHistory} from 'react-router';
import Notifications, {notify} from 'react-notify-toast';

export const updateInput = (key, value) => {

  return (dispatch) => {

    dispatch({
      type: 'PROFILE_UPDATE_INPUT',
      payload : {key, value}
    });

  }

}
