export default function(state = {}, action){

  switch(action.type) {
    case 'GET_PROFILE':
      return action.payload;
    case 'PROFILE_UPDATE_INPUT':
      return {...state, ...state[action.payload.key] =  action.payload.value};

  }

  return state;
}
