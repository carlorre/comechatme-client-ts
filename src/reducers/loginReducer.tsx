
const loginReducer = (state = null, action: any ) => {
  switch (action.type) {
    case 'NEW_USER':
      return action.username;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

export default loginReducer;
