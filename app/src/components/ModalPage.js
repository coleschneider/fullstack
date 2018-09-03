import React from 'react';
import ModalContainer from '../containers/ModalContainer';
import CustomModalContent from './Modals/CustomModalContent'
import uuid from 'uuid'
import {openModal, closeModal} from '../actions/modalActions'
import {checkAuth, login} from '../actions/authActions'
import {connect} from 'react-redux'
import LoginPage from './Login'
///higher order component
const WithAuthComponent = (WrappedComponent) => (props)=> {
  props.dispatch(checkAuth())
  return (
  <CustomModalContent>
   <WrappedComponent {...props} login={props.login} dispatch={props.dispatch}/>
   </CustomModalContent>)
}


const WithAuthCustom = WithAuthComponent(LoginPage)
const ModalPage = ({dispatch, auth}) => (
  <div className="App">
        <button className="test-button" onClick={() => dispatch(openModal({
          id: uuid.v4(),
          type: 'confirmation',
          text: 'Are you sure to do this?',
          onClose: () => console.log("fire at closing event"),
          onConfirm: () => dispatch(openModal({
            id: uuid.v4(),
            type: 'custom',
            content: <CustomModalContent />
          })),
        }))}>Open confirmation modal</button>

        <button className="test-button" onClick={() => {
        const _id = uuid.v4()
        return dispatch(
          openModal({
          id: 'login',
          type: 'custom',
          content: <WithAuthCustom auth={auth} login={() => {
            dispatch(login)
            return dispatch(closeModal('login')
          )
          }
          } dispatch={dispatch}/>
        })
      )}}>Open custom modal</button>

        <ModalContainer />
      </div>
)

const mapStateToProps = state => ({
  ...state,
  auth: state.auth
})
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalPage)