import React from "react";
import {reduxForm} from "redux-form";
import {createForm, Input, Textarea} from "../../../common/formControls/Textarea";
import ContactForm from "./ContactForm";
import s from "../../../common/formControls/Textarea.module.css";

const ProfileDataForm = reduxForm({form: 'edit-profile'})((props) => {
  return <form onSubmit={props.handleSubmit}>
    <div><b>Name: </b> {createForm(Input, 'fullName', 'Full name...', [])}</div>
    <div><b>Looking for a job: </b>{createForm(Input, 'lookingForAJob', '', [], {type: 'checkbox'})}</div>
    <div><b>My skills: </b>{createForm(Textarea, 'lookingForAJobDescription', 'My skills...', [])}</div>
    <div><b>About Me: </b>{createForm(Textarea, 'aboutMe', 'About me...', [])}</div>
    <div><b>My contacts: </b>{Object.keys(props.data.contacts).map(key => {
      return <ContactForm key={key} name={key}/>
    })}</div>
    {props.error && <div className={s.formSummaryError}> {props.error} </div>}
    <button>Save</button>
  </form>
})
export default ProfileDataForm;