import React from "react";
import {reduxForm} from "redux-form";
import {createForm, Input} from "../common/formControls/Textarea";
import {maxLengthValidatorCreator, required} from "../../utilities/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from '../common/formControls/Textarea.module.css'

const maxLength20 = maxLengthValidatorCreator(20)

const LoginForm = ({handleSubmit, error, captcha}) => {
  // debugger
  return (
    <form onSubmit={handleSubmit}>
      {createForm(Input, 'email', 'Login', [required, maxLength20])}
      {createForm(Input, 'password', 'Password', [required, maxLength20], {type: 'password'})}
      {createForm('input', 'rememberMe', null, [], {type: "checkbox"}, 'remember me')}

      {captcha && <img src={captcha} alt='Captcha'/>}
      {captcha && createForm(Input, 'captcha', 'Enter symbols...', [required])}
      {error && <div className={s.formSummaryError}> {error} </div>}
      <div>
        <button>LogIn</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }
  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login);


