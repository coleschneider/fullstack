import {
  SCREEN_RESIZE,
  TOGGLE_NAVBAR
} from '../constants/environment'

export const setLargeScreen = () => ({
  type: SCREEN_RESIZE,
  screen: 'large'
})
export const setSmallScreen = () => ({
  type: SCREEN_RESIZE,
  screen: 'small'
})
export const toggleNav = () => ({
  type: TOGGLE_NAVBAR,
  
})


export const initEnv = () => ({
    type: SCREEN_RESIZE,
    
})