import React from 'react'
import { Route, Switch } from 'react-router' /* react-router v4 */
import {Link} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import {connect} from 'react-redux'
import Home from './Home'
import ModalPage from './ModalPage'
const App = ({ history, dispatch }) => {
  return ( /* receive history object via props */
  <ConnectedRouter history={history}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/modals">Modals</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/modals" component={ModalPage} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    </div>
  </ConnectedRouter>
)}
const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)