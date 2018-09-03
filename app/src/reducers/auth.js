import { combineReducers } from "redux";
import {AUTH_CHECK, LOGOUT, LOGIN_REQUEST, USER_AUTH} from '../constants/authConstants'
import { LOGIN_SUCCESS } from "../constants/modalConstants";
const initialState = {token: null, email: null, _id: null, isAuth: false,}
const auth = (state=initialState, action) => {
  switch(action.type){
    case AUTH_CHECK:
    return {
      isLoading: true,
      isAuth: false,
    }
    case LOGIN_REQUEST:
    return {
      ...state,
      isLoading: true
    }
    case LOGOUT:
    return initialState
    case USER_AUTH:
    case LOGIN_SUCCESS:
    return {
      ...state,
      isAuth: true,
      isLoading: false,
      token: action.token,
      email: action.email,
      _id: action._id
    }

    default: return state
  }
}

export default auth