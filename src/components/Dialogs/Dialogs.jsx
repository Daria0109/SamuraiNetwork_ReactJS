import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formControls/Textarea";
import {maxLengthValidatorCreator, required} from "../../utilities/validators/validators";


const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
  const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

  const sendMessage = (value) => {
    // alert(value.messageText)
    props.addMessage(value.messageText)
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <MessageForm onSubmit={sendMessage}/>
      </div>
    </div>
  )
}
export default Dialogs;

const maxLength10 = maxLengthValidatorCreator(10);

const MessageForm = reduxForm({form: 'message'})((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               name='messageText'
               placeholder='New message...'
               validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
})