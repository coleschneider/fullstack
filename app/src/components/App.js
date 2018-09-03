import React from 'react'
import { Route, Switch } from 'react-router' /* react-router v4 */
import {Link} from 'react-router-dom'
import { ConnectedRouter, push } from 'connected-react-router'
import {connect} from 'react-redux'
import Home from './Home'

import ModalPage from './ModalPage'
import {setLargeScreen, setSmallScreen, toggleNav} from '../actions/environmentActions'
import {checkAuth, logout} from '../actions/authActions'
import NavBarContainer from '../containers/NavBarContainer';



class App extends React.Component {
  componentDidMount(){
    const {dispatch, history} = this.props
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    // const token = localStorage.getItem('jwt');
    
      dispatch(checkAuth())
    
    
    if(mediaQuery.matches){
      dispatch(setLargeScreen())
    } else {
      dispatch(setSmallScreen())
    }
    mediaQuery.addListener((mq) => {
      if (mq.matches) {
        
          dispatch(setLargeScreen());
      } else {
          dispatch(setSmallScreen());
      }
    });
    
  }
  render(){
    const {history, dispatch} = this.props
    return (
      <ConnectedRouter history={history}>
      <div>
        <NavBarContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/modals" component={ModalPage} />
          <Route path="/logout" render={() => {
            dispatch(logout())
            return dispatch(push('/'))
            }} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
    )
  }
}


const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)