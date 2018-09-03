import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar'

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
const NavBarContainer = connect((state) => ({...state, auth: state.auth}), mapDispatchToProps)(NavBar)

export default NavBarContainer
