import { AUTH_CHECK, LOGOUT, USER_AUTH, LOGIN_REQUEST } from "../constants/authConstants";
import ClientService from '../ClientService'
import jwt from 'jsonwebtoken'
import {push} from 'connected-react-router'
import { LOGIN_SUCCESS } from "../constants/modalConstants";
let _token = localStorage.getItem('jwt')
export const sign = (token, user) => ({
  type: USER_AUTH,
  token,
  ...user
})
export const checkAuth = () => dispatch => {
  
  
  dispatch({
    type: AUTH_CHECK,
  })
  
  if(localStorage.getItem('jwt')){
    const {user} = jwt.decode(_token)
    return dispatch(sign(_token, user))
  } else {
    dispatch(logout())
  }
    
}
export const reqLogin = (email, password) => ( {
  type: LOGIN_REQUEST,
  email,
  password
})

export const loginSuccess = (response) => {
  const {user} = jwt.decode(response.data.token)
  localStorage.setItem('jwt', response.data.token)
  return {
    type: LOGIN_SUCCESS,
    token: response.data.token,
     ...user,
    
  }

}
export const login = ({email, password}) => dispatch => {
  dispatch(reqLogin(email, password))
 ClientService.login(email, password).then(res => {
   dispatch(loginSuccess(res))
})
return dispatch(push('/'))
}

export const logout = () => {
 localStorage.removeItem('jwt')
  return {
   type: LOGOUT,
 } 
}