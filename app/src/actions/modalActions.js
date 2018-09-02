import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../constants/modalConstants'


export const openModal = (obj) => {
  return {
      type: OPEN_MODAL,
      obj
  }
}
export const closeModal = (obj) => {
  return {
      type: CLOSE_MODAL,
      obj
  }
}