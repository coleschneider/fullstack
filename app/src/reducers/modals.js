import {combineReducers} from 'redux';
import {
OPEN_MODAL,
CLOSE_MODAL,
LOGIN_SUCCESS
} from '../constants/modalConstants'

const initialState = {modals: []}

const modals = (state=initialState, action) => {

  switch(action.type){
    case OPEN_MODAL: 
    return {
      ...state,
      modals: state.modals.concat(action.obj)
    }
    case CLOSE_MODAL:
    
    return {
      ...state,
      modals: state.modals.filter(item => item.id !== action.obj.id)
    }
    default: return state
  }
}

export default modals