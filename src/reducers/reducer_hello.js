export default function(state = [], action){

  switch(action.type) {
    case 'HELLO':
      return action.payload;
  }

  return state;

}
