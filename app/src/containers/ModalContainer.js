import React from 'react';
import {connect} from 'react-redux';
import ModalList from '../components/Modals/ModalList'

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
const ModalContainer =connect((state) => ({modals: state.modals}), mapDispatchToProps)(ModalList)


export default ModalContainer