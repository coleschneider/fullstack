import {createStore, applyMiddleware, compose} from 'redux';  import reducers from './reducers';
import logger from 'redux-logger';
import { routerMiddleware, connectRouter } from 'connected-react-router'
import history from './history';
import thunk from 'redux-thunk';

export default () => {
  return createStore(
connectRouter(history)(reducers),
    compose(
      applyMiddleware(
        logger,
         thunk,
         routerMiddleware(history)
        ))
    
  )
}