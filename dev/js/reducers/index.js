import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

//combine in to one big object
const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
  //movies: MovieReducer
});

export default allReducers;