import React from "react";
import s from './Textarea.module.css'

const FormControl = ({input, meta, ...restProps}) => {
  const havingError = meta.touched && meta.error;
  return (
      <div className={`${s.formControl} ${havingError ? s.error : ""}`}>
        <div>
          {restProps.children}
        </div>
        {havingError && <span>{meta.error}</span>}
      </div>
  )
}


export const Textarea = (props) => {
  const {input, meta, children, ...restProps} =props;
  return (
      <FormControl {...props}>
        <textarea {...input} {...restProps} cols="30" rows="8"/>
      </FormControl>
  )
}
export const Input = (props) => {
  const {input, meta, children, ...restProps} =props;
  return (
      <FormControl {...props}>
          <input {...input} {...restProps}/>
      </FormControl>
  )
}
