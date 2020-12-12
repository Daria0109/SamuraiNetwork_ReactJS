import React from "react";
import s from './Textarea.module.css'
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
  const havingError = touched && error;
  return (
      <div className={`${s.formControl} ${havingError ? s.error : ""}`}>
        <div>
          {children}
        </div>
        {havingError && <span>{error}</span>}
      </div>
  )
}


export const Textarea = (props) => {
  const {input, meta, children, ...restProps} = props;
  return (
      <FormControl {...props}>
        <textarea {...input} {...restProps} cols="30" rows="8"/>
      </FormControl>
  )
}
export const Input = (props) => {
  const {input, meta, children, ...restProps} = props;
  return (
      <FormControl {...props}>
          <input {...input} {...restProps}/>
      </FormControl>
  )
}

export const createForm = (component, name, placeholder,
                            validators, props = {}, text = '') => {
  return <div>
    <Field component={component}
           name={name}
           placeholder={placeholder}
           validate={validators}
           {...props}/> {text}
  </div>
}
