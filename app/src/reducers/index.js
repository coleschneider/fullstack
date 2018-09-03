import {combineReducers} from 'redux';
import modals from './modals'
import auth from './auth'
import {
  SCREEN_RESIZE, TOGGLE_NAVBAR
} from '../constants/environment'
import {reducer as formReducer} from 'redux-form'
const app = (state={isOpen: false}, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
    return {
      ...state,
      isOpen: !state.isOpen
    }
    case SCREEN_RESIZE:
        return {
          screen: action.screen
        }
        default: return state
  }

}
export default combineReducers({
  app,
  modals,
  auth,
  form: formReducer
})