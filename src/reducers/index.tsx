import { combineReducers } from 'redux';
import newUser from './loginReducer';
import messagesReducer from "./messagesReducer";

const Reducers = combineReducers({
  username: newUser,
  messages: messagesReducer,
});

export type AppState = ReturnType<typeof Reducers>

export default Reducers;
