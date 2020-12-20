import React from "react";
import {createForm, Input} from "../../../common/formControls/Textarea";

const ContactForm = (props) => {
  return <>
      {createForm(Input, `contacts.${props.name}`, `${props.name}`, [])}
    </>
}
export default ContactForm;