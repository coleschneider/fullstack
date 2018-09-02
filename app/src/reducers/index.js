import {combineReducers} from 'redux';
import modals from './modals'

const app = (state={loaded: false}, action) => {
  switch(action.type){
    case "APP_LOADED":
    return {
      ...state,
      loaded: true
    }
    default: return state
  }
}
export default combineReducers({
  app,
  modals
})