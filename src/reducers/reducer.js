import { combineReducers } from "redux";
import users from '../data/users';
function login(state = {
  loginDetails: {
    "username": "hruday@gmail.com",
    "password": 'hruday123',
    loginStatus: ""
  }
}, action) {


  if (action.type == "LOGIN_STATUS") {
    state.loginDetails.loginStatus = action.value
    return { ...state }
  }
  return state;
}
function usersDetaild(state = users, action) {
  return state;
}

const rootReducer = combineReducers({
  usersDetaild,
  login
});
export default rootReducer;