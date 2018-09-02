import React from 'react';
import ModalContainer from '../containers/ModalContainer';
import CustomModalContent from './Modals/CustomModalContent'
import uuid from 'uuid'
import {openModal} from '../actions/modalActions'
import {connect} from 'react-redux'

const ModalPage = ({dispatch}) => (
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

        <button className="test-button" onClick={() => dispatch(openModal({
          id: uuid.v4(),
          type: 'custom',
          content: <CustomModalContent />
        }))}>Open custom modal</button>

        <ModalContainer />
      </div>
)

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalPage)