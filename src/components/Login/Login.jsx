import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  debugger
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='input' name='login' placeholder='Login'/>
      </div>
      <div>
        <Field component='input' name='password' placeholder='Password'/>
      </div>
      <div>
        <Field component='input' name='rememberMe' type="checkbox"/> remember me
      </div>
      <div>
        <button>LogIn</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  )
}
export default Login;


