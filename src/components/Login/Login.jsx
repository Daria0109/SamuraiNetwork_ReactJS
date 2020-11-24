import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formControls/Textarea";
import {maxLengthValidatorCreator, required} from "../../utilities/validators/validators";

const maxLength10 = maxLengthValidatorCreator(10)

const LoginForm = (props) => {
  debugger
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name='login' placeholder='Login' validate={[required, maxLength10]}/>
      </div>
      <div>
        <Field component={Input} name='password' placeholder='Password' validate={[required, maxLength10]}/>
      </div>
      <div>
        <Field component='input' name='rememberMe' type="checkbox" validate={[required, maxLength10]}/> remember me
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


