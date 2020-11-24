import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formControls/Textarea";
import {maxLengthValidatorCreator, required} from "../../utilities/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLengthValidatorCreator(20)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name='email' placeholder='Login' validate={[required, maxLength20]}/>
      </div>
      <div>
        <Field component={Input} name='password' placeholder='Password' validate={[required, maxLength20]} type='password'/>
      </div>
      <div>
        <Field component='input' name='rememberMe' type="checkbox" validate={[required, maxLength20]}/> remember me
      </div>
      <div>
        <button>LogIn</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);


