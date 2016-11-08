export default function(state = {}, action){

  switch(action.type) {
    case 'DO_LOGIN':

      return {
        ...state,
        authenticated: true
      };
    case 'DO_LOGOUT':
      return {
          ...state,
          authenticated: false
      };
  }

  return state;

}
