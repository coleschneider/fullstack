import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux'
import * as authActions from '../actions/authActions'
// import {authActions} from '../../../core/authorization'
import { compose } from 'redux';
// import './login-page.scss'


class LoginPage extends React.Component {
  constructor(){
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(formProps) {
    this.props.login({...formProps})
    // this.props.dispatch(this.props.login(formProps))
  };
renderError(){
  const {errors} = this.props
  if(errors){

    const keys = Object.keys(errors)
    console.log(keys)
    return keys.map(errorKey => (
         <strong key={errorKey}>{errorKey}:{errors[errorKey]}</strong>
    ))
    
    
  }
}
  render() {
    const { handleSubmit } = this.props;
console.log(this.props)
    return (
      <div className="login-container">
      <div className="login-wrapper">
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="email"
            component="input"
            autoComplete="none"
          />
       
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        {this.renderError()}
        <button className="auth" >Sign In!</button>
      </form>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {  auth: state.auth };
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default compose(
  connect(mapStateToProps, authActions),
  reduxForm({ form: 'login' })
)(LoginPage);