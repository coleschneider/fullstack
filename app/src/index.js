import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader'
import configureStore from './configureStore';
import history from './history'
import './styles.css'
const store = configureStore()

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()


if(module.hot){
//reload components
  module.hot.accept('./components/App', () => {
    render()
  })
  //reload store
  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
  
}

